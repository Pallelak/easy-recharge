import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8080';
  amt = 0;
  mobileNumber = 0;


  constructor(private http: HttpClient) {
    // this.getMobileNumber().subscribe(mobile => {
    //   console.log(mobile);
    //   this.mobileNumber = mobile;
    // });
  }

  register(registerData): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, registerData, {responseType: 'json'});
  }

  login(loginData): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData, {responseType: 'json'});
  }

  getRecommendedPacks(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/pack/rp`,
      {headers: new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken')), responseType: 'json'});
  }

  getBrowsePacks(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/pack/bp`,
      {headers: new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken')), responseType: 'json'});
  }

  savePayment(paymentData): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/payment/create`, paymentData,
      {headers: new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken')), responseType: 'json'});
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwtToken');
  }

  getToken(): any {
    return localStorage.getItem('jwtToken');
  }

  getMobileNumber(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/getCurrentUser`,
      {headers: new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken')), responseType: 'json'});
  }

  isAdmin(): boolean {
    if (localStorage.getItem('role') === 'admin') {
      return true;
    }
    return false;
  }

  getAllRecharge(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/payment/get`,
      {headers: new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken')), responseType: 'json'});
  }

  getAllVisitors(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/getAllUsers`,
      {headers: new HttpHeaders().set('Authorization', localStorage.getItem('jwtToken')), responseType: 'json'});
  }
}
