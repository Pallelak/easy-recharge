import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showVisitor = true;
  rechargeDetails = [];
  visitorsDetails = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllRechargeDetails();
    this.getAllVisitors()
  }

  onClickV(): void {
    this.showVisitor = true;
  }

  onClickR(): void {
    this.showVisitor = false;
  }

  getAllRechargeDetails(): void {
    this.userService.getAllRecharge().subscribe(rechargeList => {
      this.rechargeDetails = rechargeList;
    });
  }

  getAllVisitors(): void {
    this.userService.getAllVisitors().subscribe(visitorList => {
      this.visitorsDetails = visitorList;
    });
  }

}
