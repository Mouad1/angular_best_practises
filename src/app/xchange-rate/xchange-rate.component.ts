import { Component } from '@angular/core';
import { PriceCalculationService } from '../price-calculation.service';

@Component({
  selector: 'app-xchange-rate',
  templateUrl: './xchange-rate.component.html',
  styleUrls: ['./xchange-rate.component.scss'],
})
export class XchangeRateComponent {
  exchangeRate: number = 1;
  constructor(private priceService: PriceCalculationService) {}
  onRateChange() {
    this.priceService.emitPriceChange<number>(
      'exchangeRateChange',
      this.exchangeRate
    );
  }
}
