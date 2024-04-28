import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../models/products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Product[]>('http://localhost:5200/products');
  }
}