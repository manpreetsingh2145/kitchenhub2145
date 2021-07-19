import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/Admin/admin-login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

import { UserService } from 'src/app/services/user/user.service';
import { BlogService } from 'src/app/services/blog/blog.service';


@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.css']
})
export class AdminblogComponent implements OnInit {

  constructor(private admin:AdminLoginService, private router:Router, private user: UserService, private blog:BlogService, private fb:FormBuilder) { }

  blogArr;
  blogForm:FormGroup;
  setFlag:FormGroup;
  meUser;
  id;
  // abc
 

  ngOnInit(): void {

    // this.id = this.user.getId();


    this.blogForm=this.fb.group({
      // userId:this.id,
      title:[''],
      category:[''],
      blogContent:[''],
      imageArr:[''],

      date: Date()
      

    });

    this.setFlag = this.fb.group({

      flag: true

    })
    
    this.getAllBlogs()
    // this.abc = 0;
    // this.getSpecificUser(this.id);
    

  }

  async getAllBlogs(){
    const res:any = await this.user.getAllBlogs();
    if(res.success) {
      this.blogArr=res.data
      // console.log(this.blogArr)
    }
    else{
      alert(res.message)
    }
  }

  async setFlagTrue(id){
    const res: any = await this.blog.setFlagTrue(id, this.setFlag.value)
    if(res.success){
      
    alert(res.message)   
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

  // async getSpecificUser(id){
  //   const res:any = await this.user.getSpecificUser(id);
  //   if(res.success) {
  //     this.abc = 1;
  //     console.log(this.abc)
  //     this.meUser=res.data
  //     console.log(this.meUser)
  //   }
  //   else{
  //     alert(res.message)
  //   }
    
  // }

  async logout(){
    this.admin.removeJwt()
  
    this.router.navigateByUrl('/Admin/admin-login');
  }

}
