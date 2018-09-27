//import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(  private dishservice: DishService,
                private promotionservice: PromotionService,
                private leaderservice: LeaderService,
                @Inject('BaseURL') private BaseURL
              ) { }

  ngOnInit() {
     // this.dish = this.dishservice.getFeaturedDish();
     // this.promotion = this.promotionservice.getFeaturedPromotion();
     // this.leader = this.leaderservice.getFeaturedLeader();

      //this.dishservice.getFeaturedDish() .then(dish =>  this.dish= dish);
      this.dishservice.getFeaturedDish() .subscribe(dish =>  this.dish= dish);
      
      //this.promotionservice.getFeaturedPromotion().then(promotion => this.promotion = promotion);
      this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);

      //this.leaderservice.getFeaturedLeader().then(leader => this.leader = leader);
      this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }

}
