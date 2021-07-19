import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url= "http://localhost:3001"

  constructor(private http: HttpClient) { }

  async login(formData) {
     return this.http.post(`${this.url}/users/login`, formData).toPromise();
  }

  // validateUser(): any {
  //   let obj= { token : this.getJwt() }
  //   this.http.post(`${this.url}/users/verifyToken`, obj).subscribe((res: any)=>{
  //     return res.data;
  //   });
  // }

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
