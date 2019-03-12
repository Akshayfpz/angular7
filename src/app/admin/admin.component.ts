import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  Login_status:string;
  public firstname:string;
  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
    this.firstname  = params.get('firstname');
   
  });

  }


}
