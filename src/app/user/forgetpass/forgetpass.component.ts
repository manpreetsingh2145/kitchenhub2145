import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { ResetpassService } from 'src/app/services/restpass/resetpass.service';
import Swal from 'sweetalert2'


declare const showpw:any;
@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  resetForm: FormGroup

  constructor(private resetpass:ResetpassService, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.resetForm=this.fb.group({
      email:['']
      
    })

    
  
  }

  async forgotPass(){
    const res:any = await this.resetpass.forgotPass(this.resetForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire(
        'Hey',
        'Password Link Successfully send on your email!',
        'success'
      )
    }
    else
    alert(res.message)
    // Swal.fire(
    //   'Sorry',
    //   'You already Registered!',
    //   'error'
    // )
  }



  call(){
    showpw();
  }
}
