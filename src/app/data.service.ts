import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  
  firstClick(fullname) {
    return alert(fullname);
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

}
