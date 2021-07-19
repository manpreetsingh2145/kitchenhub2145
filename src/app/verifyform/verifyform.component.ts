import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';




@Component({
  selector: 'app-verifyform',
  templateUrl: './verifyform.component.html',
  styleUrls: ['./verifyform.component.css']
})
export class VerifyformComponent implements OnInit {
  
  verifyForm: FormGroup;
  token;


  constructor(private fb:FormBuilder, private user: UserService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe(paramsId => {
      this.token = paramsId.token;
    });
console.log(this.token)
    this.verifyForm=this.fb.group({
      usercode: ['']
    })
  }

  async userCode(){
    const res:any = await this.user.userCode(this.token, this.verifyForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire(
        'Hey',
        'You Successfully verified!',
        'success'
      )
    }
    else
    alert(res.message)
 
  }

}
