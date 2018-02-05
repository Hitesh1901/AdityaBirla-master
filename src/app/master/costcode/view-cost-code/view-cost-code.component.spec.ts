import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCostCodeComponent } from './view-cost-code.component';

describe('ViewCostCodeComponent', () => {
  let component: ViewCostCodeComponent;
  let fixture: ComponentFixture<ViewCostCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCostCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCostCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
