import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // import router generic
import { routes } from './routes'; // import app router 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)    
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }







 
