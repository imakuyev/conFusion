import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise  <Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getLeader(id: number): Promise <Leader> {
    //return LEADERS.filter((leader) => (leader.id === id))[0];
    return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
  }

  getFeaturedLeader(): Promise  <Leader> {
    //return LEADERS.filter((leader) => leader.featured)[0];
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
/*
  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }

  getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
*/
}
