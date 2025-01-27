import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipesComponent } from './single-recipes.component';

describe('SingleRecipesComponent', () => {
  let component: SingleRecipesComponent;
  let fixture: ComponentFixture<SingleRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRecipesComponent]
    });
    fixture = TestBed.createComponent(SingleRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
