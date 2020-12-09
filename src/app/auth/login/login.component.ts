import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.loginForm);
    const loginData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.service.login(loginData).subscribe(token => {
      localStorage.setItem('jwtToken', token.Authorization);

      console.log(token.role);
      console.log(token.role.includes('ROLE_ADMIN'));
      if (token.role.includes('ROLE_ADMIN')) {
        localStorage.setItem('role', 'admin');
      } else{
        localStorage.setItem('role', 'user');
      }
      this.router.navigate(['/recharge']);
    });
  }

}
