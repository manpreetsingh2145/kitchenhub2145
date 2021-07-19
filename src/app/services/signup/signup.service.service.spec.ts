import { TestBed } from '@angular/core/testing';

import { Signup.ServiceService } from './signup.service.service';

describe('Signup.ServiceService', () => {
  let service: Signup.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Signup.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
