import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XchangeRateComponent } from './xchange-rate.component';

describe('XchangeRateComponent', () => {
  let component: XchangeRateComponent;
  let fixture: ComponentFixture<XchangeRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XchangeRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
