import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  dataForm!: FormGroup;

  certificatesData!: FormArray;


  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.dataForm = this.fb.group({
      name: [null],
      email: [null],
      certificates: this.fb.array([])
    })

    this.certificatesData = this.dataForm.get('certificates') as FormArray;

  }

  addCertificate(){
    const f = this.fb.group({
      degree: [null]
    });

    (this.dataForm.get('certificate') as FormArray).push(f);
    this.certificatesData = this.dataForm.get('certificates') as FormArray;
  }

  onSubmit(){
    console.log(this.dataForm.value);
    
  }

}
