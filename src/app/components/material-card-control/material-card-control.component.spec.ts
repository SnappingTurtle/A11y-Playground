import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCardControlComponent } from './material-card-control.component';

describe('MaterialCardControlComponent', () => {
  let component: MaterialCardControlComponent;
  let fixture: ComponentFixture<MaterialCardControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCardControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCardControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
