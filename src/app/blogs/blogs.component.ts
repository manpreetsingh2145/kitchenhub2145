import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from '../services/category/category.service';
import { SubcategoryService } from '../services/subcategory/subcategory.service';



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private user:UserService, private fb:FormBuilder, private category:CategoryService, private subCategory:SubcategoryService) { }

  blogArr;
  allCategoryObj;
  allSubCategoryObj;
  tempAllSubCategoryObj;
  filterBlog;
  blogLikes;
  modalId
  id
  blogForm:FormGroup;
  categoryForm:FormGroup;



  ngOnInit(): void {
    this.blogForm=this.fb.group({
      title:[''],
      categoryId: [''],
      subCategoryId: [''],
      blogContent:[''],
      imageArr:[''],
      likesget:[''],
      likeCount:[''],

      date: Date.now()
  
    })

    


   
 

    // this.categoryForm=this.fb.group({

    //   name:['']
  
  
    // })
    this.getAllBlogs()
    this.getCategorys();
    this.getSubCategorys();
    // this.Likes(this.id)

  }

  async getCategorys() {
    const res: any = await this.category.getCategorys();
    this.allCategoryObj = res.data;
  }
 

  async getSubCategorys() {
    const res: any = await this.subCategory.getSubCategorys();
    this.allSubCategoryObj = res.data;
    this.tempAllSubCategoryObj = res.data;

  }

  async getAllBlogs(){
    const res:any = await this.user.getAllBlogs();
    if(res.success) {
      this.blogArr=res.data
      console.log(this.blogArr)
      this.blogArr = this.blogArr.filter(el => el.flag == true)
      this.filterBlog = this.blogArr.slice(0)
    }
    else{
      alert(res.message)
    }
  }

  // setModalId(id){
  //   this.modalId=id;

  // }

  setModalId(id){
    this.modalId=id;

  }


  async Likes(){
    const res: any = await this.user.Likes(this.modalId,this.blogForm);
    if(res.success){
      this.blogLikes = res.data
      console.log(this.blogLikes)
    }
    else{
      alert(res.message)
    }
  }

}
