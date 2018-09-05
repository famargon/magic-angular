import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUiGeneratorComponent } from './dynamic-ui-generator.component';

describe('DynamicUiGeneratorComponent', () => {
  let component: DynamicUiGeneratorComponent;
  let fixture: ComponentFixture<DynamicUiGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicUiGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicUiGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
