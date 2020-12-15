import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Stefan Janoski',
      description: 'Number 3 shoes',
      price: '4500',
      image: 'https://hypebeast.com/image/2019/03/nike-sb-stefan-janoski-tiffany-blue-colorway-release-1.jpg'
    },
    {
      id: 2,
      name: 'Nike Air Jordan 1',
      description: 'Number 1 shoes',
      price: '9500',
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/459ff194c35e45ea91b1a8ba00fc4876_9366/NMD_R1_Shoes_Black_B42200_01_standard.jpg'
    },
    {
      id: 3,
      name: 'Adidas Nmd',
      description: 'Number 3 shoes',
      price: '20000',
      image: 'https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Adidas-Yeezy-Boost-350-V2-Synth-1_1200x.png?v=1570058419'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
