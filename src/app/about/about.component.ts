import { Component, OnInit , Inject} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leader: Leader;
  leaders: Leader[];
  errMess: String;
  constructor(private leaderservice: LeaderService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    
    //this.leaders = this.leaderservice.getLeaders();
   // this.leaderservice.getLeaders() .then(leaders => this.leaders = leaders);
    this.leaderservice.getLeaders() .subscribe(leaders => this.leaders = leaders,
                                               errmess => this.errMess = <any>errmess
      );

       
   
    
  }

  goBack(): void {
    this.location.back();
  }

}
