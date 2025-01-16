import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingWrapperComponent } from './billing-wrapper.component';

describe('BillingWrapperComponent', () => {
  let component: BillingWrapperComponent;
  let fixture: ComponentFixture<BillingWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingWrapperComponent]
    });
    fixture = TestBed.createComponent(BillingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
