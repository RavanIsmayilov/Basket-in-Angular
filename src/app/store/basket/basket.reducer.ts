import { createReducer, on } from '@ngrx/store';

import { ProductsApiActions } from './basket.action';
import { Product } from '../../models/products.model';


export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(
    ProductsApiActions.retrievedProductList,
    (_state, { products }) => products
  )
);