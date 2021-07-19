import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetpassService {
  
  url="http://localhost:3001"

  constructor(private http:HttpClient) { }

  async forgotPass(formData){
    return this.http.patch(`${this.url}/users/resetPassLink`, formData).toPromise();
  }

  async updatePassme(id, formData){
    return this.http.patch(`${this.url}/users/resetPass/${id}`, formData).toPromise();
  

  }
}
