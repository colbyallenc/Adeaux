import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Globe2Component } from './globe2-.component';

describe('Globe2Component', () => {
  let component: Globe2Component;
  let fixture: ComponentFixture<Globe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Globe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Globe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
