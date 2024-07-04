import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-add-edit-product',
  standalone: true,
  
  templateUrl:'./add-edit-product.component.html',
  styleUrl:'./add-edit-product.component.css'
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;

constructor (private fb: FormBuilder) {
  this.form = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    ubicacion: ['', Validators.required],
    stock: [null, Validators.required],
    
  })
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProduct(){
    const product: Product ={
      name: this.form.value.name,
      description: this.form.value.description,
      ubicacion: this.form.value.ubicacion,
      stock: this.form.value.stock
    }
    console.log(product)
  }
}