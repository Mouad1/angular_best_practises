import { Injectable } from '@angular/core';
import { Observable, interval, map, of } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const ITEMS: Item[] = [
  { id: 1, name: 'Item 1', price: 10, quantity: 1 },
  { id: 2, name: 'Item 2', price: 20, quantity: 1 },
  { id: 3, name: 'Item 3', price: 10, quantity: 1 },
  { id: 4, name: 'Item 4', price: 20, quantity: 1 },
];

@Injectable({
  providedIn: 'root',
})
export class PriceCalculationService {
  constructor() {}

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  calculateTotal(items: Item[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getRealTimePriceUpdates(): Observable<Item[]> {
    return interval(10000).pipe(
      map(() => {
        // Logic to simulate price updates
        return ITEMS.map((item) => ({
          ...item,
          price: item.price + Math.floor(Math.random() * 10),
        }));
      })
    );
  }
}
