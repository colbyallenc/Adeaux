import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLayerIndexComponent } from './top-layer-index.component';

describe('TopLayerIndexComponent', () => {
  let component: TopLayerIndexComponent;
  let fixture: ComponentFixture<TopLayerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLayerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLayerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
