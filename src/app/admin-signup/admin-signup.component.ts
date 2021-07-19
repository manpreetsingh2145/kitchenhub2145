import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AdminLoginService } from 'src/app/services/Admin/admin-login.service';
import { SignupService } from '../services/signup/signup.service.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  AdminForm: FormGroup

  constructor(private signup: SignupService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.AdminForm=this.fb.group({
      email:[''],
      password:['']
    })
  }

  async AdminSignup(){
    const res:any= await this.signup.AdminSignup(this.AdminForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire(
        'Hey',
        'Successfully Register!',
        'success'
      )
    }
    else{
 window.alert(res.message)
    }

  
  }

  

}


 

