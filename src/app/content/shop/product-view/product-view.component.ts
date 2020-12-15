import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  selectedProduct : any;

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


  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
  ) {
    console.log(this.router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;

        const selected = this.products.filter (
          (product) => {
            return +product.id === +id;
          }
        );

        if(selected.length > 0) {
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._globalService.subjectName.next('');
  }

}
