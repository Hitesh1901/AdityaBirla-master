import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCostCodeComponent } from './edit-cost-code.component';

describe('EditCostCodeComponent', () => {
  let component: EditCostCodeComponent;
  let fixture: ComponentFixture<EditCostCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCostCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCostCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
