import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriceCalculationService } from '../price-calculation.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
})
export class DiscountComponent {
  constructor(private priceService: PriceCalculationService) {}
  @Input() productId!: number;
  discountPercentage: number = 0; // Default discount percentage

  applyDiscount() {
    this.priceService.emitPriceChange<{ productId: number; discount: number }>(
      'discountApplied',
      { productId: this.productId, discount: this.discountPercentage }
    );
  }
}
