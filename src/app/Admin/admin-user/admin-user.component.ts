import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { AdminLoginService } from 'src/app/services/Admin/admin-login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  constructor(private admin:AdminLoginService, private router:Router, private user:UserService, private fb:FormBuilder) { }
  userArr;
  blogArr;
  modalId;
  UpArr
  email;
  fname
  totalRec : number;
  page: number = 1;
  signupForm:FormGroup


  ngOnInit(): void {
    this.signupForm=this.fb.group({
      email:[''],
      fname:['']

  
    })
    this.getUser();
    this.getAllBlogs()
  }


  setModalId(id){
    this.modalId=id;


    // this.signupForm.patchValue({
    //   email: [this.modalId],
    //   fname:[this.fname]

    // })
    // console.log(id)
  
  }


  async updateUser()
  {
    const res:any= await this.user.updateUser(this.modalId,this.signupForm.value)
    this.UpArr=res.data
    console.log(this.UpArr)
    if(res.success) {
      alert(res.message)
     }
     else{
       alert(res.message)
     }
     window.location.reload();
  }

  async getUser(){
    const res:any = await this.user.getUser();
    if(res.success) {
      this.userArr=res.data
      console.log(this.userArr)
    }
    else{
      alert(res.message)
    }
  }

  async deleteUser(id){
    const res:any = await this.user.deleteUser(id)
    if(res.success) {
     alert(res.message)
    }
    else{
      alert(res.message)
    }
    this.ngOnInit();
  }

  async getAllBlogs(){
    const res:any = await this.user.getAllBlogs();
    if(res.success) {
      this.blogArr=res.data
      console.log(this.blogArr)
    }
    else{
      alert(res.message)
    }
  }

  async logout(){
    this.admin.removeJwt()
  
    this.router.navigateByUrl('/Admin/admin-login');
  }

}
