import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesWrapperComponent } from './recipes-wrapper.component';

describe('RecipesWrapperComponent', () => {
  let component: RecipesWrapperComponent;
  let fixture: ComponentFixture<RecipesWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesWrapperComponent]
    });
    fixture = TestBed.createComponent(RecipesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
