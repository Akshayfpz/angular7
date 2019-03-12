import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import "dhtmlx-gantt";
export class Task {
  id: number;
  start_date: string;
  text: string;
  progress: number;
  duration: number;
  parent: number;
}
export class Link {
  id: number;
  source: number;
  target: number;
  type: string;
}
export class TaskService {
  get(): Promise<Task[]>{
      return Promise.resolve([
          {id: 1, text: "Task #1", start_date: "2017-04-15 00:00", duration: 3, progress: 0.6},
          {id: 2, text: "Task #2", start_date: "2017-04-18 00:00", duration: 3, progress: 0.4}
      ]);
  }
}
export class LinkService {
  get(): Promise<Link[]> {
      return Promise.resolve([
          {id: 1, source: 1, target: 2, type: "0"}
      ]);
  }
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-checkout',
  providers: [TaskService, LinkService],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})


export class CheckoutComponent implements OnInit {

  previousUrl:any;

  constructor(private router: Router,private route: ActivatedRoute,private taskService: TaskService, private linkService: LinkService) { }
@ViewChild("gantt_here") ganttContainer: ElementRef;
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
     // console.log(params);
     this.previousUrl  = params.get('previousUrl');
     
    });
    let    tasks = [
      {id: 1, text: "Task #1", start_date: "2017-04-15 00:00", duration: 3, progress: 0.6},
      {id: 2, text: "Task #2", start_date: "2017-04-18 00:00", duration: 3, progress: 0.4}
  ];
  let links = [
      {id: 1, source: 1, target: 2, type: "0"}
  ];
    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.init(this.ganttContainer.nativeElement);
    Promise.all([this.taskService.get(), this.linkService.get()])
     .then(([data, links]) => {
         gantt.parse({data, links});
     });
   
  }
  btn_click(){
    this.router.navigate([this.previousUrl]);
  }
}
