import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnoWcagInputComponent } from './inno-wcag-input.component';

describe('InnoWcagInputComponent', () => {
  let component: InnoWcagInputComponent;
  let fixture: ComponentFixture<InnoWcagInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnoWcagInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnoWcagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
