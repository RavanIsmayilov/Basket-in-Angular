import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../models/products.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  @Input() products: ReadonlyArray<Product> = [];
  @Output() remove = new EventEmitter<string>();
}