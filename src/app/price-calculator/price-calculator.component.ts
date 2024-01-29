import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item, PriceCalculationService } from '../price-calculation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss'],
})
export class PriceCalculatorComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  loading = false;
  totalPrice = 0;

  private priceUpdateSubscription!: Subscription;

  constructor(private priceCalculationService: PriceCalculationService) {}

  ngOnInit(): void {
    this.loading = true;
    this.priceCalculationService.getItems().subscribe((items) => {
      this.items = items;
      this.loading = false;
      this.calculateTotalPrice();
    });

    // Subscribe to real-time price updates
    // this.priceUpdateSubscription = this.priceCalculationService
    //   .getRealTimePriceUpdates()
    //   .subscribe((updatedItems) => {
    //     this.items = updatedItems;
    //     this.calculateTotalPrice();
    //   });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.priceCalculationService.calculateTotal(this.items);
  }

  onQuantityChange(): void {
    this.calculateTotalPrice();
  }

  addItem(): void {
    const newItem: Item = {
      id: this.items.length + 1,
      name: `Item ${this.items.length + 1}`,
      price: Math.floor(Math.random() * 100),
      quantity: 1,
    };
    this.items.push(newItem);
    this.calculateTotalPrice();
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.calculateTotalPrice();
  }

  ngOnDestroy(): void {
    // Unsubscribe from the observable when the component is destroyed
    if (this.priceUpdateSubscription) {
      this.priceUpdateSubscription.unsubscribe();
    }
  }
}
