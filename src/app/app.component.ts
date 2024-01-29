import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showChild = true;
  childProperty = 'Initial Value';

  toggleChild() {
    this.showChild = !this.showChild;
  }

  changeChildProperty() {
    this.childProperty = 'Updated Value';
  }
}
