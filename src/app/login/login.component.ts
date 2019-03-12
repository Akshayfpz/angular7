import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  failure = false;
  user_details:any;
  loading = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  
  get f() { return this.loginForm.controls; }

  onSubmit(){
    //console.log(this.loginForm.value);
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    
   let login_check= this.authService.login(this.f.username.value, this.f.password.value);
    if(login_check==true){
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/admin'], {queryParams: {firstname: this.f.username.value}});
    }, 3000);
    }else{
      //alert("Incorrect Username or Password");
      this.failure = true; 
    }
    //
    
  }

}
