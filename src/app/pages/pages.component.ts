import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from 'src/app/services/blog/blog.service';
import { UserService } from 'src/app/services/user/user.service';

import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { LoginService } from '../user/services/login/login.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import Swal from 'sweetalert2'
import { CategoryService } from '../services/category/category.service';
import { SubcategoryService } from '../services/subcategory/subcategory.service';


declare const openNav: any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {


  constructor(private login:LoginService, private category:CategoryService, private subCategory:SubcategoryService, private router:Router, private blog:BlogService, private user:UserService, private fb:FormBuilder) { }
  blogForm:FormGroup;
  id;
  meUser;
  myblog;
  blogArr;
  modalId;
  allCategoryObj;
  allSubCategoryObj;
  tempAllSubCategoryObj;
  tempImageArr: any = [];
  displayArr: any = [];


  ngOnInit(): void {

    this.id = this.user.getId();


    this.blogForm=this.fb.group({
      userId:this.id,
      title:[''],
      category:[''],
      blogContent:[''],
      imageArr:[''],

      date: Date()
      

    })

    this.getSpecificUser(this.id);
    this.getSpecifyBlog(this.id)
    this.getCategorys();
    this.getSubCategorys();
   

  }

  setModalId(id){
    this.modalId=id;

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

  
  async getSpecificUser(id){
    const res:any = await this.user.getSpecificUser(id);
    if(res.success) {
      this.meUser=res.data
      console.log(this.meUser)

      
    }
    else{
      alert(res.message)
    }
    
  }

  async getSpecifyBlog(id){
    const res:any = await this.user.getSpecifyBlog(id);
    if(res.success) {
      this.blogArr=res.data
      console.log(this.blogArr)
    }
    else{
      alert(res.message)
    }
    
  }

  async deleteBlog(id){
    const res:any = await this.blog.deleteBlog(id)
    if(res.success) {
     alert(res.message)
    }
    else{
      alert(res.message)
    }
    this.ngOnInit();
  }

  async updateBlog(){
    const res:any= await this.user.updateBlog(this.modalId,this.blogForm.value)
    if(res.success) {
      alert(res.message)
     }
     else{
       alert(res.message)
     }
     window.location.reload();
  }

  filterSubCategory(event) {
    let tempId = event.target.value;
    this.tempAllSubCategoryObj = this.allSubCategoryObj.filter(el => el.categoryId == tempId)
  }
  uploadImage(event) {

    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.tempImageArr.push(reader.result);
        this.displayArr.push(event.target.value.split(/(\\|\/)/g).pop());
        this.blogForm.patchValue({
          imageArr: this.tempImageArr
        })
        // console.log(this.specificationForm.value);
      }
    }

  }

      ////////////////////////////deleting  image from array
      deleteImage(i) {
        this.tempImageArr.splice(i, 1)
        this.displayArr.splice(i, 1)
        this.blogForm.patchValue({
          imageArr: this.tempImageArr
        })
      }


  async logout(){
    this.login.removeJwt()
  
    this.router.navigateByUrl('/login');
  }


  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '200px',
      maxHeight: '200px',
      width: '465px',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};


}
