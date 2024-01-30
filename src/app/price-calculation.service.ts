import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable() // Notice that providedIn is not set here
export class PriceCalculationService implements OnDestroy {
  private eventChannels: { [eventName: string]: Subject<any> } = {};
  private subscriptions$: Subscription[] = [];

  public emitPriceChange<T>(eventName: string, priceData: T) {
    this.registerEvent<T>(eventName);
    (this.eventChannels[eventName] as Subject<T>).next(priceData);
  }

  public onPriceChange<T>(
    eventName: string,
    callback: (priceData: T) => void
  ): Subscription {
    this.registerEvent<T>(eventName);
    const subscription = this.eventChannels[eventName].subscribe(callback);
    this.subscriptions$.push(subscription);
    return subscription;
  }

  ngOnDestroy() {
    this.subscriptions$.forEach((subscription) => subscription.unsubscribe());
  }

  private registerEvent<T>(eventName: string) {
    if (!(eventName in this.eventChannels)) {
      this.eventChannels[eventName] = new Subject<T>();
    }
  }
}
