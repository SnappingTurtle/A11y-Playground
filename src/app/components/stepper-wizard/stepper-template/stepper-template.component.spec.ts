import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTemplateComponent } from './stepper-template.component';

describe('StepperTemplateComponent', () => {
  let component: StepperTemplateComponent;
  let fixture: ComponentFixture<StepperTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
