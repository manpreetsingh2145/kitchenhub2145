import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { from } from 'rxjs';
import { ContactService } from '../services/contact/contact.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup

  constructor(private fb:FormBuilder, private contact:ContactService) { }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      name: [''],
      email: [''],
      number: [''],
      subject: [''],
      message: ['']
    })
  }

  async send(){
    const res:any = await this.contact.send(this.contactForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire(
        'Thanking You',
        'Your Message Successfully Saved!',
        'success'
      )
    }
    else
    alert(res.message)
  }

}
