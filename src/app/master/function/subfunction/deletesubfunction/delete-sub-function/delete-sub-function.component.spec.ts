import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubFunctionComponent } from './delete-sub-function.component';

describe('DeleteSubFunctionComponent', () => {
  let component: DeleteSubFunctionComponent;
  let fixture: ComponentFixture<DeleteSubFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSubFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSubFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
