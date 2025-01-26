import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCoffeeComponent } from './single-coffee.component';

describe('SingleCoffeeComponent', () => {
  let component: SingleCoffeeComponent;
  let fixture: ComponentFixture<SingleCoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCoffeeComponent]
    });
    fixture = TestBed.createComponent(SingleCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
