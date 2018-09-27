//import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
//import { DISHES } from '../shared/dishes';

import { DishService } from '../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  selectedDish:Dish; //= DISHES[0];
  
  //constructor() { }
  //constructor(private dishService: DishService) { }

  constructor(private dishService: DishService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
      //this.dishService.getDishes().then(dishes => this.dishes = dishes);
      this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
  


  
  onSelect(dish:Dish){
      this.selectedDish=dish;
  }
  
}

