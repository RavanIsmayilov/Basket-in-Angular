import { createReducer, on } from '@ngrx/store';

import { ProductsActions } from './basket.action';

export const initialState: ReadonlyArray<string> = [];

export const shoppingCartReducer = createReducer(
  initialState,
  on(ProductsActions.removeProduct, (state, { productId }) =>
    state.filter((id) => id !== productId)
  ),
  on(ProductsActions.addProduct, (state, { productId }) => {
    if (state.indexOf(productId) > -1) return state;

    return [...state, productId];
  })
);