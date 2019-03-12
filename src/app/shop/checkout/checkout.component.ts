import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from "../task.service";
import { LinkService } from "../link.service";
 
import "dhtmlx-gantt";


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
