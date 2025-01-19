import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTitleComponent } from './chart-title.component';

describe('ChartTitleComponent', () => {
  let component: ChartTitleComponent;
  let fixture: ComponentFixture<ChartTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartTitleComponent]
    });
    fixture = TestBed.createComponent(ChartTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
