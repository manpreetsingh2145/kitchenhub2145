import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
declare const showpw:any;
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  call(){
    showpw();
  }
  loginForm: FormGroup
  constructor(private login:LoginService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[''],
      email:[''],
      
      password:['']
    })
  }

  async Login(){
    const res:any= await this.login.login(this.loginForm.value)
    if(res.success){
      
      alert(res.message)
      // Swal.fire(
      //   'Hey',
      //   'You Successfully Login!',
      //   'success'
      // )
    }
    else{
      // Swal.fire(
      //   'Sorry',
      //   'Check your password!',
      //   'error'
      // )
       alert(res.message)
    }
    this.login.setJwt(res.data)
    this.router.navigateByUrl('/dashboard')

  }


}
 