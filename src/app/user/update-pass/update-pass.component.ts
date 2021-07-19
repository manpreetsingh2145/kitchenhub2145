import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ResetpassService } from 'src/app/services/restpass/resetpass.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent implements OnInit {
  token;
  updateForm:FormGroup;


  constructor(private aRoute:ActivatedRoute,private fb:FormBuilder, private restepass:ResetpassService) { }

  ngOnInit(): void {

    this.aRoute.params.subscribe(paramsId => {
      this.token = paramsId.token;
    });
console.log(this.token)
    this.updateForm=this.fb.group({
      password:['']
    })
  }

  async updatePassme(){
    const res:any = await this.restepass.updatePassme(this.token,this.updateForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire(
        'Hey',
        'Successfully updated your password',
        'success'
      )
    }
    else
    alert(res.message)
  }

}