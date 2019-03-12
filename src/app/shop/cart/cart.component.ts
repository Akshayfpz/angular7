import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  confirm_btn(){
    //alert(this.router.url);
    this.router.navigate(['/shop/confirm'], {queryParams: {previousUrl: this.router.url}});
  }
  checkout_btn(){
    this.router.navigate(['/shop/checkout'], {queryParams: {previousUrl: this.router.url}});
  }
  calendar_btn(){
    this.router.navigate(['/shop/calendar'], {queryParams: {previousUrl: this.router.url}});
  }
}
