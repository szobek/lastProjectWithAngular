import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaginatorComponent } from './invoice-paginator.component';

describe('InvoicePaginatorComponent', () => {
  let component: InvoicePaginatorComponent;
  let fixture: ComponentFixture<InvoicePaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicePaginatorComponent]
    });
    fixture = TestBed.createComponent(InvoicePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
