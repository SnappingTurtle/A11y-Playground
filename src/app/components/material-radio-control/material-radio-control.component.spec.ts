import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRadioControlComponent } from './material-radio-control.component';

describe('MaterialRadioControlComponent', () => {
  let component: MaterialRadioControlComponent;
  let fixture: ComponentFixture<MaterialRadioControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialRadioControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRadioControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
