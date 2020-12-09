import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  form = new FormGroup({
    cardNumber: new FormControl('', [Validators.min(16), Validators.required]),
    month: new FormControl('', [Validators.min(2), Validators.required]),
    year: new FormControl('', [Validators.min(4), Validators.required]),
    name: new FormControl('', Validators.required),
    csv: new FormControl('', [Validators.min(3), Validators.required])
  });

  constructor(public service: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.service.getMobileNumber().subscribe(mNumber => {
      const paymentData = {
        amt: this.service.amt,
        mobileNumber: mNumber
      };

      if (this.form.value.cardNumber.length !== 16) {
        alert('enter 16 digit number');
      } else if(this.form.value.month.length !== 2 || this.form.value.month > 12) {
        alert('invalid month');
      } else if(this.form.value.year < new Date().getFullYear()) {
        alert('invalid year');
      } else if(this.form.value.csv.length !== 3) {
        alert('invalid cvv');
      } else {
        this.service.savePayment(paymentData).subscribe(data => {


          if ( data != null) {
            alert('payment done');
            this.form.reset();
          }
        });
      }
    });


  }

}
