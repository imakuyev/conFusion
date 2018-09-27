
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Comment } from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Feedback, ContactType } from '../shared/feedback';

 
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
 
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

/*
export class DishdetailComponent implements OnInit {
    @Input()
    dish:Dish;
    constructor() { }

    ngOnInit() {
   
    }
}
*/
export class DishdetailComponent implements OnInit {

  @ViewChild('fform') commentFormDirective;

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;


  currentdish: Dish;

  //rating:any;



  commentForm: FormGroup;
  comment:     Comment;
  //contactType = ContactType;



  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              @Inject('BaseURL') private BaseURL) { 
                this.createForm();

              }
/*
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    //this.dish = this.dishservice.getDish(id);
    //this.dishservice.getDish(id)    .then(DISHES => this.dish = DISHES)
    this.dishservice.getDish(id).subscribe(DISHES => this.dish = DISHES)
    //this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
*/
ngOnInit() {
  this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
  this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
  .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
}

setPrevNext(dishId: number) {
  const index = this.dishIds.indexOf(dishId);
  this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
  this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
}

  goBack(): void {
    this.location.back();
  }


  createForm():void {
   
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      comment: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)] ] ,
      rating: ['5', [Validators.required]]  
       
          });
      this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));

      this.onValueChanged(); // (re)set validation messages now




  }



  formErrors = {
    'rating': '5',
    'comment': '',
    'author': '' 
  };
  validationMessages = {
    'author': {
      'required':      'Your Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required':      'Last Name is required.',
      'minlength':     'Comment must be at least 1 character  long.',
      'maxlength':     'Comment cannot be more than 250 characters long.'
    },
    'rating': {
      'required':      'Rating number is required.'
  
    },
   
  };


  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        
        }



      }

    }





  }
  onSubmit() {

   
    var date = new Date();
    
    console.log(   date);
    

      this.comment = this.commentForm.value;

      this.comment.date=date.toString();

      //this.dish.comments.push()
       
   
      this.dish.comments.push(this.comment);
      this.commentFormDirective.resetForm();
      this.commentForm.reset({
        rating: 5,
        comment: '',
        author: '',
        date: ''

      });
      this.comment.rating=5;
     

       

  }

}
