import { Component, OnInit ,Input} from '@angular/core';
import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



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

  dish: Dish;

  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    //this.dish = this.dishservice.getDish(id);
    //this.dishservice.getDish(id)    .then(DISHES => this.dish = DISHES)
    this.dishservice.getDish(id).subscribe(DISHES => this.dish = DISHES)
    //this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

  goBack(): void {
    this.location.back();
  }

}
