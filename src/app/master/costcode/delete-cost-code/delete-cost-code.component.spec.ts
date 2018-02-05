import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCostCodeComponent } from './delete-cost-code.component';

describe('DeleteCostCodeComponent', () => {
  let component: DeleteCostCodeComponent;
  let fixture: ComponentFixture<DeleteCostCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCostCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCostCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
