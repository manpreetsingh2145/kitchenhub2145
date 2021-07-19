import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,) { }

  url='http://localhost:3001';

  async getUser(){
    return this.http.get(`${this.url}/users/getUser`).toPromise();
  }

  async deleteUser(id){
    return this.http.delete(`${this.url}/users/deleteUser/${id}`).toPromise();
  }

  async updateUser(id,formData){

    return this.http.patch(`${this.url}/users/updateUser/${id}`, formData).toPromise();

  }

  async updateBlog(id, formData){
   return this.http.patch(`${this.url}/blog/updateBlog/${id}`, formData).toPromise();
  }

 async updatePass(id, formData){
   return this.http.patch(`${this.url}/users/updatePass/${id}`, formData).toPromise();
 }

  async getSpecificUser(id){
    return this.http.get(`${this.url}/users/getSpecificUser/${id}`).toPromise();

  }

  async getAllBlogs(){
    return this.http.get(`${this.url}/blog/getAllBlogs`).toPromise();

  }

  async getSpecifyBlog(id){
    return this.http.get(`${this.url}/blog/getSpecifyBlog/${id}`).toPromise();
   

  }


  async resetpass(formData){
    return this.http.post(`${this.url}/users/resetPass`, formData).toPromise();
  }

  async userCode(id, formData){
    return this.http.patch(`${this.url}/users/userCode/${id}`, formData).toPromise();
  

  }
   async Likes(id,formData){
    return this.http.patch(`${this.url}/users/Likes/${id}`,formData).toPromise();

   }


  getId(){
    let token= localStorage.getItem("userToken")
    if (token) {
      let payload = token.split('.')[1]

      payload = window.atob(payload);

      let one = payload.toString();
      let two = one.slice(8, 32)
      // console.log(two)
      return two;
     
    }

    else {
      return null;
    }

  }
}
