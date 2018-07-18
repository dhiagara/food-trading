import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit{
  constructor() {
   }
  ngOnInit() { 
  }
  ngAfterViewInit(){

    new WOW().init();
  }


}
