import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderWithPdfViewerComponent } from './render-with-pdf-viewer.component';

describe('RenderWithPdfViewerComponent', () => {
  let component: RenderWithPdfViewerComponent;
  let fixture: ComponentFixture<RenderWithPdfViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderWithPdfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderWithPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
