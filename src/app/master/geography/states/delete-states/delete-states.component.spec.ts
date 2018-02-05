import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStatesComponent } from './delete-states.component';

describe('DeleteStatesComponent', () => {
  let component: DeleteStatesComponent;
  let fixture: ComponentFixture<DeleteStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
