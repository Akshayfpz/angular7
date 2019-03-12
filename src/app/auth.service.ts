import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new Subject<any>();
  constructor(private http: HttpClient) { }

  public login(username: string, password: string){
    
    localStorage.setItem('ACCESS_TOKEN', "login_granted");
    let reg_users = JSON.parse(localStorage.getItem('User_info')) || [];
    //console.log(reg_users);
    let isPresent = reg_users.some(function(el){ 
      return el.username === username && el.password===password;
    });
    return isPresent;
     // console.log(isPresent);
  }
  public register(userInfo: User){  

    let users = JSON.parse(localStorage.getItem('User_info')) || [];
    users.push(userInfo);    
    localStorage.setItem('User_info', JSON.stringify(users));
    return true;

  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');

  }
  public sendMessage(message: string) {
    this.subject.next({ text: message });
}

  public clearMessages() {
      this.subject.next();
  }

  public getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

}