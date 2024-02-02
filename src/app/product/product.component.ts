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
  currentPrice!: number;

  constructor(private priceService: PriceCalculationService) {}

  ngOnInit() {
    // Initialize currentPrice with basePrice
    this.currentPrice = this.basePrice;

    this.priceService.onPriceChange<{ productId: number; discount: number }>(
      'discountApplied',
      (data) => {
        if (data.productId === this.productId) {
          this.applyDiscount(data.discount);
        }
      }
    );
  }

  applyDiscount(discount: number) {
    const newPrice = this.basePrice - (this.basePrice * discount) / 100;
    const priceDifference = this.currentPrice - newPrice;
    this.currentPrice = newPrice;
    // Update local price and notify others of the price change
    this.priceService.emitPriceChange<number>(
      'priceDifference',
      priceDifference
    );
  }
}
