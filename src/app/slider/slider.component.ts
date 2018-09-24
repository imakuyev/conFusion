import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  autoTicks = true;
   
  showTicks = true;
   
   


  thumbLabel = true;
  tickInterval="1";
  min="1";
  max="5";
  step="1";
  value="5";


  constructor() { }

  ngOnInit() {
  }

}
