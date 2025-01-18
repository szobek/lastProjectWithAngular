import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntariesComponent } from './voluntaries.component';

describe('VoluntariesComponent', () => {
  let component: VoluntariesComponent;
  let fixture: ComponentFixture<VoluntariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoluntariesComponent]
    });
    fixture = TestBed.createComponent(VoluntariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
