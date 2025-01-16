import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCardWrapperComponent } from './setup-card-wrapper.component';

describe('SetupCardWrapperComponent', () => {
  let component: SetupCardWrapperComponent;
  let fixture: ComponentFixture<SetupCardWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetupCardWrapperComponent]
    });
    fixture = TestBed.createComponent(SetupCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
