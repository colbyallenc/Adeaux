import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlockingComponent } from './flocking.component';

describe('FlockingComponent', () => {
  let component: FlockingComponent;
  let fixture: ComponentFixture<FlockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
