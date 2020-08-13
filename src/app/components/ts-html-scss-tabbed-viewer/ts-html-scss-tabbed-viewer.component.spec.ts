import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsHtmlScssTabbedViewerComponent } from './ts-html-scss-tabbed-viewer.component';

describe('TsHtmlScssTabbedViewerComponent', () => {
  let component: TsHtmlScssTabbedViewerComponent;
  let fixture: ComponentFixture<TsHtmlScssTabbedViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsHtmlScssTabbedViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsHtmlScssTabbedViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
