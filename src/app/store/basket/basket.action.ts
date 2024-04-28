import { createActionGroup, props } from '@ngrx/store';

import { Product } from '../../models/products.model';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Add Product': props<{ productId: string }>(),
    'Remove Product': props<{ productId: string }>(),
  },
});

export const ProductsApiActions = createActionGroup({
  source: 'http://localhost:5200/products',
  events: {
    'Retrieved Product List': props<{ products: ReadonlyArray<Product> }>(),
  },
});