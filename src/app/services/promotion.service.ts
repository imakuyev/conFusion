import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
 

//import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  //constructor() { }
  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


    getPromotions(): Observable <Promotion[]> {
      //return PROMOTIONS;
     // return Promise.resolve(PROMOTIONS);
      //return new Promise(resolve=> {
        // Simulate server latency with 2 second delay
        //  setTimeout(() => resolve(PROMOTIONS), 2000);
      //});
      //return of(PROMOTIONS).pipe(delay(2000));
      return this.http.get<Promotion[]>(baseURL + 'Promotions')
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getPromotion(id: number): Observable  <Promotion> {
      //return PROMOTIONS.filter((promo) => (promo.id === id))[0];
      //return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
      //return new Promise(resolve=> {
      //  // Simulate server latency with 2 second delay
      //    setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
     // });
    // return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));


     return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getFeaturedPromotion(): Observable <Promotion> {
     //// return PROMOTIONS.filter((promotion) => promotion.featured)[0];
     ////return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
     //return  new Promise(resolve=> {
     // // Simulate server latency with 2 second delay
     //   setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
    //});
    //return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  
  }





}



