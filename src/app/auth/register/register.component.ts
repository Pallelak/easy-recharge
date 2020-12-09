import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm = new FormGroup({
    username: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cPass: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  });
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.regForm);
    if (this.regForm.value.password !== this.regForm.value.cPass) {
      alert('username not matched');
    } else if (this.regForm.value.mobile.length !== 10){
      alert('invalid mobile number');
    } else if (this.regForm.value.email === null) {
      alert('email is empty');
    } else {
      let regData = {};

      if (this.regForm.value.role === 'admin') {
        regData = {
          userName: this.regForm.value.username,
          password: this.regForm.value.password,
          email: this.regForm.value.email,
          mobileNumber: this.regForm.value.mobile,
          roles: 'ROLE_USER, ROLE_ADMIN'
        };
      } else {
        regData = {
          userName: this.regForm.value.username,
          password: this.regForm.value.password,
          email: this.regForm.value.email,
          mobileNumber: this.regForm.value.mobile,
          roles: 'ROLE_USER'
        };
      }

      this.service.register(regData).subscribe(data => {
        if (data != null) {
          alert('registered successfully');
          this.regForm.reset();
        }
      });
    }
  }
}
