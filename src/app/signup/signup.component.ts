import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { from } from 'rxjs';
import { SignupService } from '../services/signup/signup.service.service';
import Swal from 'sweetalert2';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup
  constructor(private fb:FormBuilder, private signup:SignupService) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      password: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]


    })
  }

  async addData(){
    const res:any = await this.signup.addData(this.signupForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire(
        'Hey',
        'You Successfully Registered!',
        'success'
      )

      // this.router.navigateByUrl('/verifyform/:token')
    }
    else
    alert(res.message)
    // Swal.fire(
    //   'Sorry',
    //   'You already Registered!',
    //   'error'
    // )
  }

}
