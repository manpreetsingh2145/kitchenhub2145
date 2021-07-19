import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url="http://localhost:3001"

  constructor(private http:HttpClient) { }

  async addData(formData){
    return this.http.post(`${this.url}/users/signup`, formData).toPromise();
  }

  async AdminSignup(formData){
    return this.http.post(`${this.url}/admin/AdminSignup`, formData).toPromise();
  }
}


