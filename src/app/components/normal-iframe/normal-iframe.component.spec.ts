import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalIframeComponent } from './normal-iframe.component';

describe('NormalIframeComponent', () => {
  let component: NormalIframeComponent;
  let fixture: ComponentFixture<NormalIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
