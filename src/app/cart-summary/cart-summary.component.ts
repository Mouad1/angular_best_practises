import { Component, OnInit } from '@angular/core';
import { PriceCalculationService } from '../price-calculation.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  totalPrice: number = 0;

  constructor(private priceService: PriceCalculationService) {}

  ngOnInit() {
    this.priceService.onPriceChange<number>(
      'priceDifference',
      (priceDifference) => {
        console.log(priceDifference);
        this.totalPrice += priceDifference;
      }
    );
  }
}
