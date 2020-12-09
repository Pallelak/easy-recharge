import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('role');
    this.router.navigate(['/auth']);
  }

}
