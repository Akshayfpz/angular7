import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  Login_status:string;
  appTitle: string = 'myapp';
  token:boolean;
  messages: any[] = [];
  subscription: Subscription;
  buttontoggled:boolean;
  firstname:string;

  constructor(private router: Router,private authService: AuthService,private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.subscription = this.authService.getMessage().subscribe(message => {
      if (message) {
        this.Login_status = message.text;
        
        //console.log(this.Login_status);
      } else {
        // clear messages when empty message received
        this.Login_status = '';
        
      }
    });
    this.route.queryParamMap.subscribe((params) => {
     // console.log(params);
      this.firstname  = params.get('firstname');
      //alert(this.firstname);
     
    });
    
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  } 

  check_login(){
    //alert(this.Login_status);
    if(this.Login_status=='Logout'){
      this.authService.logout();
      this.router.navigateByUrl('/login');
      
    }
    if(this.Login_status=='Login'){
      //localStorage.removeItem('ACCESS_TOKEN');
      this.router.navigateByUrl('/login');
    }
  }
  toggle_nav(){
    this.buttontoggled=!this.buttontoggled;
  }


}
