import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  formData!: FormGroup;

  productDetails = {
    name: 'Hasib',
    price: 100,
    email: 'hasibkyau@gmail.com',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    console.log('beforePatch:', this.formData.value);
    this.setFormData();
    console.log('afterPatch:', this.formData.value);
  }

  initForm() {
    this.formData = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  setFormData() {
    this.formData.patchValue(this.productDetails);
  }

  onSubmit() {
    if (this.formData.valid) {
      this.saveData();
    } else {
      console.log('invalid');
    }
  }

  saveData() {
    console.log('saving data with api');
  }
}
