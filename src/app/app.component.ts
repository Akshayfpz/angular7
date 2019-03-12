import { Component } from '@angular/core';
import { AuthService } from  './auth.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewProject';
  token:boolean;
  Login_status:string;
  constructor(private authService: AuthService) { }

  changeOfRoutes(){
    //alert("gnfg");
    this.token = this.authService.isLoggedIn();
      if(this.token==false){
        this.Login_status = 'Login';
      }
      if(this.token==true){
        this.Login_status = 'Logout';
      }
      this.authService.sendMessage(this.Login_status);
  }
    


}