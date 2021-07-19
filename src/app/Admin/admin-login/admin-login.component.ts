import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AdminLoginService } from 'src/app/services/Admin/admin-login.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private admin: AdminLoginService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
  }

  async Adlogin(){
    const res:any= await this.admin.login(this.loginForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire(
        'Hey',
        'You Successfully Login!',
        'success'
      )
    }
    else{
      Swal.fire(
        'Sorry',
        'Please Check your credentials!',
        'error'
      )
    }
    this.admin.setJwt(res.data)
    this.router.navigateByUrl('Admin/admin-dashboard')
  
  }

  

}


 

