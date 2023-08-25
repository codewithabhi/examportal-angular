import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuesComponent } from './view-ques.component';

describe('ViewQuesComponent', () => {
  let component: ViewQuesComponent;
  let fixture: ComponentFixture<ViewQuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuesComponent]
    });
    fixture = TestBed.createComponent(ViewQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
