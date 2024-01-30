import { Component, Input, OnInit } from '@angular/core';
import { PriceCalculationService } from '../price-calculation.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() productId!: number;
  @Input() basePrice!: number;

  productName!: string;
  price!: number;

  constructor(private priceService: PriceCalculationService) {}

  ngOnInit() {
    this.productName = `Product ${this.productId}`;
    this.price = this.basePrice;

    this.priceService.onPriceChange<number>('discount', (discountValue) => {
      this.applyDiscount(discountValue);
    });
  }

  applyDiscount(discountValue: number) {
    this.price -= (this.price * discountValue) / 100; // Subtract discount from the current price
    this.price = Math.max(this.price, 0); // Ensure the price doesn't go below 0
  }
}
