import { TestBed } from '@angular/core/testing';

import { UpdateQuesService } from './update-ques.service';

describe('UpdateQuesService', () => {
  let service: UpdateQuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateQuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
