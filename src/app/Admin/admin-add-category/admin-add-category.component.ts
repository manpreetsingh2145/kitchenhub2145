import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';


@Component({
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.css']
})
export class AdminAddCategoryComponent implements OnInit {

  categoryForm:FormGroup;

  
  constructor(private fb:FormBuilder, private category:CategoryService) { }


  ngOnInit(): void {
    this.categoryForm=this.fb.group({
      name:['']
    })
  }

  async addCategory(){
    const res: any = await this.category.addCategory(this.categoryForm.value);
    if(res.success){
      alert(res.message)
    }
    else{
      alert(res.message)
    }
  }


}
