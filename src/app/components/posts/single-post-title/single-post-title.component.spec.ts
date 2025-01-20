import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostTitleComponent } from './single-post-title.component';

describe('SinglePostTitleComponent', () => {
  let component: SinglePostTitleComponent;
  let fixture: ComponentFixture<SinglePostTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePostTitleComponent]
    });
    fixture = TestBed.createComponent(SinglePostTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
