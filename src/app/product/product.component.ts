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
  isEditing: boolean = false;

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

  load(): void {
    this.service.getProduct().subscribe({
      next: data => this.products = data
    })
  }

  ngOnInit(): void {
    this.load();
  }

  save() {
    if (!this.isEditing)
    {
      this.service.postProduct(this.productFormsGroup.value).subscribe({
        next: () => {
          this.load();
          this.productFormsGroup.reset();
        }
      });
    }
    else
    {
      this.service.putProduct(this.productFormsGroup.value).subscribe({
        next: () => {
          this.load();
          this.isEditing = false;
          this.productFormsGroup.reset();
        }
      })
    }
  }

  delete(product: Product) {
    this.service.deleteProduct(product).subscribe({
      next: () => {
        this.load();
      }
    })
  }

  update(product: Product){
    this.isEditing = true;
    this.productFormsGroup.setValue(product);
  }
}
