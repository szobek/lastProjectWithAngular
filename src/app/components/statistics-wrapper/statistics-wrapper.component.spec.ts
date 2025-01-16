import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsWrapperComponent } from './statistics-wrapper.component';

describe('StatisticsWrapperComponent', () => {
  let component: StatisticsWrapperComponent;
  let fixture: ComponentFixture<StatisticsWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsWrapperComponent]
    });
    fixture = TestBed.createComponent(StatisticsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
