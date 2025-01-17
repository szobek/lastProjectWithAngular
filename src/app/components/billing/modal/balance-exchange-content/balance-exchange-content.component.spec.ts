import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceExchangeContentComponent } from './balance-exchange-content.component';

describe('BalanceExchangeContentComponent', () => {
  let component: BalanceExchangeContentComponent;
  let fixture: ComponentFixture<BalanceExchangeContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceExchangeContentComponent]
    });
    fixture = TestBed.createComponent(BalanceExchangeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
