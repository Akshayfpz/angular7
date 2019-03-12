import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import "dhtmlx-gantt";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  previousUrl:any;

  constructor(private router: Router,private route: ActivatedRoute) { }
@ViewChild("gantt_here") ganttContainer: ElementRef;
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
     // console.log(params);
     this.previousUrl  = params.get('previousUrl');
     
    });
    gantt.init(this.ganttContainer.nativeElement);
  }
  btn_click(){
    this.router.navigate([this.previousUrl]);
  }
}
