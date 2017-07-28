import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyBackgroundComponent } from './sky-background.component';

describe('SkyBackgroundComponent', () => {
  let component: SkyBackgroundComponent;
  let fixture: ComponentFixture<SkyBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
