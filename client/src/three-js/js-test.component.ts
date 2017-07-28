import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-js-test',
  templateUrl: './js-test.component.html',
  styleUrls: ['./js-test.component.css']
})
export class JsTestComponent implements OnInit {

constructor(private elementRef:ElementRef) {};

ngOnInit() {}

ngAfterViewInit() {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "./build/three.js";
  this.elementRef.nativeElement.appendChild(s);


  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = "./js/Detector.js";
  this.elementRef.nativeElement.appendChild(a);

  var d = document.createElement("script");
  d.type = "text/javascript";
  d.src = "./js/Detector.js";
  this.elementRef.nativeElement.appendChild(d);

}

}
