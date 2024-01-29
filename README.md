# AngularLifecycles

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

It consists of a `PriceCalculatorComponent` that allows users to select items and quantities. The total price is calculated based on the selections. Each `ItemComponent` represents an individual item, showing the item's price and providing an option to select quantity.

This branch (hooks_part1) represents an example of a demonstration about the use of constructor, ngOnInit, and ngOnDestroy.

## Constructor

The constructor is typically used for dependency injection. It is not recommended to perform any significant operations in the constructor.

## ngOnInit

`ngOnInit` is invoked once after the first `ngOnChanges`. It is used for component initialization, fetching data, and setting initial values. In `PriceCalculatorComponent`, `ngOnInit` is used to fetch the list of items from `PriceCalculationService`, initialize the loading state, calculate the initial total price, and set the items to the fetched list once they are retrieved. In addition to the existing logic, we subscribe to the `getRealTimePriceUpdates` method of `PriceCalculationService`. This simulates receiving real-time updates for item prices.

## ngOnDestroy

Before the component is destroyed, we check if there's an active subscription to the price updates and unsubscribe from it. This is crucial to prevent memory leaks and ensure that the component cleans up properly.

Understanding when `ngOnDestroy` is called is crucial for proper cleanup to prevent memory leaks and other unwanted behaviors. Here are some common scenarios where `ngOnDestroy` would be called:

1. When navigating away from a route that renders the component.
2. If the component is included in a template conditionally using `*ngIf` and the condition changes to false. For example: `<app-price-calculator *ngIf="showCalculator"></app-price-calculator>`.
3. Using `*ngFor` with `trackBy`, and the `trackBy` function results in an object being considered new, the old component will be destroyed, and a new component will be created.
4. If a parent component is destroyed, all its child components will also be destroyed.

In this demonstration, we can test the `ngOnDestroy` by deleting an item via the delete button or via the function that simulates the real-time data fetching: `getRealTimePriceUpdates`.
