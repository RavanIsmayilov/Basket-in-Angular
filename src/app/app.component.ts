import { Component } from '@angular/core';
import { selectProducts, selectShoppingCart } from './store/basket/basket.selectors';
import { ProductsActions, ProductsApiActions } from './store/basket/basket.action';
import { ProductsService } from './products/products/products.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-work6';

  products$ = this.store.select(selectProducts);
  shoppingCart$ = this.store.select(selectShoppingCart);

  onAdd(productId: string) {
    this.store.dispatch(ProductsActions.addProduct({ productId }));
  }

  onRemove(productId: string) {
    this.store.dispatch(ProductsActions.removeProduct({ productId }));
  }

  constructor(private ProductsService: ProductsService, private store: Store) {}

  //TODO: handle this with NgRx Effects
  ngOnInit() {
    this.ProductsService
      .getProducts()
      .subscribe((products) =>
        this.store.dispatch(
          ProductsApiActions.retrievedProductList({ products })
        )
      );
  }
}
