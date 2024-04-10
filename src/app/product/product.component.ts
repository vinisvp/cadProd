import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];
  productFormsGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ProductService
  ){
    this.productFormsGroup = formBuilder.group({
      id:[''],
      name:[''],
      description:[''],
      price:[''],
      quantity:['']
    });
  }
  ngOnInit(): void {
    this.service.getProduct().subscribe({
      next: data => this.products = data
    })
  }

  save(){
    this.products.push(this.productFormsGroup.value);
  }
}
