import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterByCategoryViewComponent } from './letter-by-category-view.component';

describe('LetterByCategoryViewComponent', () => {
  let component: LetterByCategoryViewComponent;
  let fixture: ComponentFixture<LetterByCategoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterByCategoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterByCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
