import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js'
declare var Parallax: any;

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // ngAfterContentInit(){
  //   const scene=document.getElementById('scene');
  //   const parallaxInstance= new Parallax(scene,{
  //     relativeInput:true,
  //     hoverOnly:true
  //   })};
  

}
