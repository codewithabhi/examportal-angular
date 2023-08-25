import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuesComponent } from './add-ques.component';

describe('AddQuesComponent', () => {
  let component: AddQuesComponent;
  let fixture: ComponentFixture<AddQuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddQuesComponent]
    });
    fixture = TestBed.createComponent(AddQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
