import { Component } from '@angular/core';
import { PriceCalculationService } from '../price-calculation.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
})
export class DiscountComponent {
  constructor(private priceService: PriceCalculationService) {}
  discountPercentage: number = 0; // Default discount percentage

  applyDiscount() {
    this.priceService.emitPriceChange<number>(
      'discount',
      this.discountPercentage
    );
  }
}
