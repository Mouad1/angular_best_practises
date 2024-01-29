import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Item } from '../price-calculation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() quantityChange = new EventEmitter<number>();

  constructor() {
    console.log('ItemComponent: constructor');
  }

  ngOnInit(): void {
    console.log(`ItemComponent (ID: ${this.item.id}): ngOnInit`);
    // Initialize component state here, such as fetching more details about the item if necessary
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ItemComponent (ID: ${this.item.id}): ngOnChanges`, changes);
    // React to input property changes if necessary
  }

  ngOnDestroy(): void {
    console.log(`ItemComponent (ID: ${this.item.id}): ngOnDestroy`);
    // Cleanup any subscriptions or resources to avoid memory leaks
  }

  onQuantityChange(newValue: any): void {
    const quantity = parseInt(newValue, 10); // Convert the new value to a number
    if (!isNaN(quantity)) {
      this.item.quantity = quantity; // Update the quantity of the item
      this.quantityChange.emit(); // Notify the parent component of the change
    }
  }
}
