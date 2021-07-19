
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  url = 'http://localhost:3001';
  constructor(private http: HttpClient) { }

  async addSubCategory(formData) {
    return this.http.post(`${this.url}/subCategory/addSubCategory`, formData).toPromise()
  }

  async getSubCategorys() {
    return this.http.get(`${this.url}/subCategory/getAllSubCategorys`).toPromise();
  }

  async deleteSubCategory(id) {
    return this.http.delete(`${this.url}/subCategory/deleteSpecificSubCategory/${id}`).toPromise();
  }

  async updateSubCategory(formData, id) {
    return this.http.patch(`${this.url}/subCategory/updateSpecificSubCategory/${id}`, formData).toPromise()
  }

  async getParticularSubCategory(id) {
    return this.http.get(`${this.url}/subCategory/getSpecificSubCategory/${id}`).toPromise()
  }
}
