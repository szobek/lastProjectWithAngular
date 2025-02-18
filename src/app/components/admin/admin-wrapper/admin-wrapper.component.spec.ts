import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrapperComponent } from './admin-wrapper.component';

describe('AdminWrapperComponent', () => {
  let component: AdminWrapperComponent;
  let fixture: ComponentFixture<AdminWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWrapperComponent]
    });
    fixture = TestBed.createComponent(AdminWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
