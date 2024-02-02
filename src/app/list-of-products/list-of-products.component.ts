import { Component } from '@angular/core';
import { PriceCalculationService } from '../price-calculation.service';

interface Product {
  id: number;
  name: string;
  basePrice: number;
}

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
  // providers: [PriceCalculationService], // Service is provided here
})
export class ListOfProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', basePrice: 100 },
    { id: 2, name: 'Product 2', basePrice: 150 },
    { id: 3, name: 'Product 3', basePrice: 200 },
  ];
}
