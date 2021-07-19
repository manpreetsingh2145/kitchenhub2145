import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url="http://localhost:3001"

  constructor(private http:HttpClient) { }

  async send(formData){
    return this.http.post(`${this.url}/users/query`, formData).toPromise();
  }
}