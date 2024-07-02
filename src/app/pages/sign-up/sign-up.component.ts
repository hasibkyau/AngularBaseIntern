import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  formData!: FormGroup;
  

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(){
    this.initForm();
    console.log('hello');
    
  }

  initForm(){
    this.formData = this.fb.group({
    fname: null,
    lname: null,
    email: null,
    phone: null,
    password: null,
    reRassword: null
    })
  }

  onSubmit(){
    console.log('formData:', this.formData.value);
    
  }

}
