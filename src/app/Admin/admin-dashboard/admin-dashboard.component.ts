import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/Admin/admin-login.service';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from 'src/app/services/blog/blog.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { SubcategoryService } from 'src/app/services/subcategory/subcategory.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  blogForm:FormGroup;
  updateForm:FormGroup;
  id;
  meUser;
  modalId;
  myblog;
  allCategoryObj;
  allSubCategoryObj;
  tempAllSubCategoryObj;
  tempImageArr: any = [];
  displayArr: any = [];

  constructor(private admin:AdminLoginService, private router:Router, private fb:FormBuilder, private blog:BlogService, private user:UserService, private category:CategoryService, private subCategory:SubcategoryService) { }

  ngOnInit(): void {

    this.blogForm=this.fb.group({
      userId:this.id,
      title:[''],
      categoryId: [''],
      subCategoryId: [''],
      blogContent:[''],
      imageArr:[''],
      date: new Date()

     

    });

    this.getCategorys();
    this.getSubCategorys();
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


  async blogPost(){
    const res:any = await this.blog.blogPost(this.blogForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire(
        'Hey',
        'You Successfully post your blog!',
        'success'
      )
    }
    else
    // alert(res.message)
    Swal.fire(
      'Sorry',
      'You already Registered!',
      'error'
    )
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


  
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '200px',
      maxHeight: '200px',
      width: '750px',
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

  

  async logout(){
    this.admin.removeJwt()
  
    this.router.navigateByUrl('/Admin/admin-login');
  }

}
