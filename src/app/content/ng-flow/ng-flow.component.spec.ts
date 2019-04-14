import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFlowComponent } from './ng-flow.component';

describe('NgFlowComponent', () => {
  let component: NgFlowComponent;
  let fixture: ComponentFixture<NgFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
