import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductsType} from "../../types/products.type";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() product: ProductsType = {image: '', title: '', price: 0};
  @Input() index: number = 0;

  @Output() addToCartEvent: EventEmitter<ProductsType> = new EventEmitter<ProductsType>();

  constructor() {
  }

  addProductToCard(product: ProductsType) {
    this.addToCartEvent.emit(product);
  }
}
