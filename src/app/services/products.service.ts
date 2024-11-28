import { Injectable } from '@angular/core';
import {ProductsType} from "../types/products.type";

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): ProductsType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        price: 1.70
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        price: 1.70
      },
      {
        image: '3.png',
        title: 'Пирог с ванилью',
        price: 1.70
      },
      {
        image: '4.png',
        title: 'Пирог с фисташками',
        price: 1.70
      }
    ]
  }
}
