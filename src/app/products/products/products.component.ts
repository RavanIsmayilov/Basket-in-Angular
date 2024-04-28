import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() products: ReadonlyArray<Product> = [];
  @Output() add = new EventEmitter<string>();
}
