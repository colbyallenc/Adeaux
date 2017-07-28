import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeViewComponent } from './globe-view.component';

describe('GlobeViewComponent', () => {
  let component: GlobeViewComponent;
  let fixture: ComponentFixture<GlobeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
