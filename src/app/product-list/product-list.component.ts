import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: 'iPhone 16',
      description: 'Apple A18 Bionic',
      image: 'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/p/iphone_16_ultramarine_pdp_image_position_1__ce-ww.jpg/w_600'
    },
    {
      id: 2,
      name: 'iPhone 16 Pro',
      description: 'Apple A18 Bionic',
      image: 'https://content2.rozetka.com.ua/goods/images/big/468886490.jpg'
    },
    {
      id: 3,
      name: 'iPhone 16 Pro Max',
      description: 'Apple A18 Bionic Pro',
      image: 'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/p/iphone_16_pro_max_natural_titanium_pdp_image_position_1__ce-ww.jpg/w_600'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product); 
    window.alert(`${product.name} доданий до кошика!`);
  }

  share() {
    window.alert('Товар був поширений!');
  }
}
