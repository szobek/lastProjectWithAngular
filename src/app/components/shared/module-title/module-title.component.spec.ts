import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTitleComponent } from './module-title.component';

describe('ModuleTitleComponent', () => {
  let component: ModuleTitleComponent;
  let fixture: ComponentFixture<ModuleTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleTitleComponent]
    });
    fixture = TestBed.createComponent(ModuleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
