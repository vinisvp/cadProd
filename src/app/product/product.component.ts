import { Component } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];
  productFormsGroup: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.productFormsGroup = formBuilder.group({
      id:[''],
      name:[''],
      description:[''],
      price:[''],
      quantity:['']
    });
  }

  save(){
    this.products.push(this.productFormsGroup.value);
  }
}
