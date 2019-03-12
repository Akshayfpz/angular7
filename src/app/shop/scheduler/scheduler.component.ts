import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import "dhtmlx-scheduler";

declare let scheduler: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'] 
})
export class SchedulerComponent implements OnInit {
  
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;

    ngOnInit(){
      var data = [
        { "id": "2", "start_date": "2017-05-24 00:00:00", "end_date": "2017-06-08 00:00:00", "text": "French Open", "details": "Philippe-Chatrier Court\n Paris, FRA"},
        { "id": "3", "start_date": "2017-06-10 00:00:00", "end_date": "2017-06-13 00:00:00", "text": "Aegon Championship", "details": "The Queens Club\n London, ENG"},
        { "id": "4", "start_date": "2017-06-21 00:00:00", "end_date": "2017-07-05 00:00:00", "text": "Wimbledon", "details": "Wimbledon\n June 21, 2009 - July 5, 2009"},
        { "id": "5", "start_date": "2017-06-18 00:00:00", "end_date": "2017-06-27 00:00:00", "text": "Indianapolis Tennis Championship", "details": "Indianapolis Tennis Center\n Indianapolis, IN"},
        { "id": "8", "start_date": "2017-06-27 00:00:00", "end_date": "2017-06-02 00:00:00", "text": "Countrywide Classic Tennis", "details": "Los Angeles Tennis Center.\n Los Angeles, CA  "},
        { "id": "7", "start_date": "2017-06-11 00:00:00", "end_date": "2017-06-18 00:00:00", "text": "ATP Master Tennis", "details": "La Caja Magica.\n Madrid, Spain"}
    ];

    // scheduler.attachEvent("onBeforeDrag",this.new_popup);
    // scheduler.attachEvent("onClick",this.new_popup);
    // scheduler.attachEvent("onBeforeLightBox",this.new_popup);
  
    scheduler.config.xml_date="%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement,new Date(2017,5,1),"month");
    scheduler.parse(data, "json");
    }
     
    new_popup(){
      alert("Fdhb");
    }
}
