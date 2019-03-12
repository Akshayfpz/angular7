import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  previousUrl:any;
  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private router: Router,private route: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
     // console.log(params);
     this.previousUrl  = params.get('previousUrl');
     
    });
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  btn_click(){
    this.router.navigate([this.previousUrl]);
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    
    if (this.registerForm.invalid) {
      this.loading = false;
        return;
    }else{
      alert("form submitted");
    }
   
}


}
