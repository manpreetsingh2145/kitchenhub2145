import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SubcategoryService } from 'src/app/services/subcategory/subcategory.service';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-admin-add-sub-category',
  templateUrl: './admin-add-sub-category.component.html',
  styleUrls: ['./admin-add-sub-category.component.css']
})
export class AdminAddSubCategoryComponent implements OnInit {

  subCategoryForm:FormGroup;
  constructor(private fb:FormBuilder, private category:CategoryService, private subCategory:SubcategoryService) { }
  allCategoryObj;

  ngOnInit(): void {
    this.subCategoryForm=this.fb.group({
      name:[''],
      categoryId:['']
    })
    this.getCategorys();
  }

  async getCategorys() {
    const res: any = await this.category.getCategorys();
    this.allCategoryObj = res.data;
  }

  ////for data
  async addSubCategory(){
    // console.log(this.subCategoryForm.value)
    const res: any = await this.subCategory.addSubCategory(this.subCategoryForm.value);
    if(res.success){
      alert(res.message)
    }
    else{
      alert(res.message)
    }
  }

}
