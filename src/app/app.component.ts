import {Component, OnInit} from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {ProductsType} from "./types/products.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public showPresent: boolean = true;

  public isActive: boolean = false;

  public contact: string = '375293689868';

  public instagram: string = 'Мы в Instagram';

  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ]

  public products: ProductsType[] = [];

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  constructor(public productService: ProductsService, public cartService: CartService) {

  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductsType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title;
    this.cartService.count++;
    this.cartService.sum += product.price;
    alert(product.title + " добавлен в корзину!");
  }

  public activeMenu(): void {
    this.isActive = !this.isActive;
  }
}
