import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'http://localhost:3001';
  constructor(private http: HttpClient) { }

  async addCategory(formData) {
    return this.http.post(`${this.url}/category/addCategory`, formData).toPromise()
  }

  async getCategorys() {
    return this.http.get(`${this.url}/category/getAllCategorys`).toPromise();
  }

  async deleteCategory(id) {
    return this.http.delete(`${this.url}/category/deleteSpecificCategory/${id}`).toPromise();
  }

  async updateCategory(formData, id) {
    return this.http.patch(`${this.url}/category/updateSpecificCategory/${id}`, formData).toPromise()
  }

  async getParticularCategory(id) {
    return this.http.get(`${this.url}/category/getSpecificCategory/${id}`).toPromise()
  }
}
