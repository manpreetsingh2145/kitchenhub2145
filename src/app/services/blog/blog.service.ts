import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url="http://localhost:3001"

  constructor(private http:HttpClient) { }

  async blogPost(formData){
    return this.http.post(`${this.url}/blog/addBlog`, formData).toPromise();
  }

  async getAllBlogs(){
    return this.http.get(`${this.url}/blog/getAllBlogs`).toPromise();

  }



  // async getcatBlog(id){
  //   return this.http.get(`${this.url}/blog/getSpecifycatBlog${id}`).toPromise();

  // }


  async deleteBlog(id){
    return this.http.delete(`${this.url}/blog/deleteBlog/${id}`).toPromise();
  }

  async setFlagTrue(id, formData){
    return this.http.patch(`${this.url}/blog/flag/${id}`, formData).toPromise();
   
  }

  // async getSpecificUser(id){
  //  return this.http.get(`${this.url}/users/getgetSpecificUser${id}`).toPromise(); 
  // }
}
