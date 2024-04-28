import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from '../../models/products.model';


export const selectProducts =
  createFeatureSelector<ReadonlyArray<Product>>('products');

export const selectShoppingCartState =
  createFeatureSelector<ReadonlyArray<string>>('shoppingCart');

export const selectShoppingCart = createSelector(
  selectProducts,
  selectShoppingCartState,
  (products, shoppingCart) => {
    return shoppingCart.map(
      (id) => products.find((product) => product.id === id)!
    );
  }
);