import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  mobileNUmber = null;
  formgroup = new FormGroup({
    mobileNumber: new FormControl( {value: '', disabled: true}, Validators.required),
    amt: new FormControl('', Validators.required)
  });

  constructor(private service: UserService, private route: Router) { }

  recommendedPacks = [];
  browsePack = [];
  ngOnInit(): void {
    this.getRp();
    this.getBp();

    this.getMobileNumber();
  }

  getRp(): void {
    this.service.getRecommendedPacks().subscribe(packs => {
      console.log(packs);
      this.recommendedPacks = packs;
    });
  }

  getBp(): void {
    this.service.getBrowsePacks().subscribe(packs => {
      console.log(packs);
      this.browsePack = packs;
    });
  }

  onSubmit(): void {
    this.service.amt = this.formgroup.value.amt;
    this.service.mobileNumber = this.formgroup.value.mobileNumber;

    this.formgroup.reset();
    this.route.navigate(['/recharge/payment']);
  }

  onClickButton(price): void {
    this.service.amt = price;
    this.route.navigate(['/recharge/payment']);
  }

  getMobileNumber(): void {
    this.service.getMobileNumber().subscribe(mobile => {
      console.log(mobile);
      this.mobileNUmber =  '' + mobile;
    });
  }

}
