import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperWizardComponent } from './stepper-wizard.component';

describe('StepperWizardComponent', () => {
  let component: StepperWizardComponent;
  let fixture: ComponentFixture<StepperWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
