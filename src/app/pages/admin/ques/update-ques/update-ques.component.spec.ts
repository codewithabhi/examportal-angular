import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuesComponent } from './update-ques.component';

describe('UpdateQuesComponent', () => {
  let component: UpdateQuesComponent;
  let fixture: ComponentFixture<UpdateQuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateQuesComponent]
    });
    fixture = TestBed.createComponent(UpdateQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
