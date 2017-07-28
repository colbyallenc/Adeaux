import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlidingPlaneComponent } from './gliding-plane.component';

describe('GlidingPlaneComponent', () => {
  let component: GlidingPlaneComponent;
  let fixture: ComponentFixture<GlidingPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlidingPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlidingPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
