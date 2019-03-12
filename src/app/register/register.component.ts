import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from  '../auth.service';
import { Router } from  '@angular/router';
import { ValidateUrl } from '../custom_validator';
import { ValidatePassword } from '../custom_validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  success = false;
  loading = false;
  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),ValidateUrl]],
      password: ['', [Validators.required, Validators.minLength(6),ValidatePassword]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    
    if (this.registerForm.invalid) {
      this.loading = false;
        return;
    }
    this.success = true;
    let v = this.authService.register(this.registerForm.value);
    if(v == true ){
      if(confirm("Thank you for Registering. Do you want to login now?")) {
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/home']);
      } 
    }else{
     alert("Something went wrong");
    }
 
}


}
