import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
//import { LEADERS } from '../shared/leaders';


import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
 
 

//import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';



@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  //constructor() { }
  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }
    
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

getLeaders(): Observable  <Leader[]> {
    //return Promise.resolve(LEADERS);
    //return new Promise(resolve=> {
    // Simulate server latency with 2 second delay
     
   // return of(LEADERS).pipe(delay(2000));

    return this.http.get<Leader[]>(baseURL + 'leaders')
                    .pipe(catchError(this.processHTTPMsgService.handleError));
  };

 

getLeader(id: number): Observable <Leader> {
    //return LEADERS.filter((leader) => (leader.id === id))[0];
    //return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
    //return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
      // setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
    //return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000));
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
                .pipe(catchError(this.processHTTPMsgService.handleError));
    };


 
 
getFeaturedLeader(): Observable  <Leader> {
    //return LEADERS.filter((leader) => leader.featured)[0];
    //return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    //return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
    //    setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
   // return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true').pipe(map(leaders => leaders[0]))
                .pipe(catchError(this.processHTTPMsgService.handleError));
  };




   


}
