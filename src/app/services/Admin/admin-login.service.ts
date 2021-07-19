import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  url= "http://localhost:3001"


  constructor(private http: HttpClient) { }

  async login(formData){
    return this.http.post(`${this.url}/admin/login`, formData).toPromise();

  }

  setJwt(token){
    localStorage.setItem("userToken", token)
  }

  removeJwt(){
    localStorage.removeItem("userToken")
  }

  getJwt(){
    let token= localStorage.getItem("userToken")
    if (token) {
      let payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    }

    else {
      return null
    }

  }
}











