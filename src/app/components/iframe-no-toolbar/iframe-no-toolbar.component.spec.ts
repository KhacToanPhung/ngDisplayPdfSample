import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeNoToolbarComponent } from './iframe-no-toolbar.component';

describe('IframeNoToolbarComponent', () => {
  let component: IframeNoToolbarComponent;
  let fixture: ComponentFixture<IframeNoToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeNoToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeNoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
