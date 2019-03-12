import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  previousUrl:any;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
     // console.log(params);
     this.previousUrl  = params.get('previousUrl');
     
    });
  
  }
  btn_click(){
    this.router.navigate([this.previousUrl]);
  }
}
