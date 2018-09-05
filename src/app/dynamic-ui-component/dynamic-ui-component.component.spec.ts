import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUiComponentComponent } from './dynamic-ui-component.component';

describe('DynamicUiComponentComponent', () => {
  let component: DynamicUiComponentComponent;
  let fixture: ComponentFixture<DynamicUiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicUiComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicUiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
