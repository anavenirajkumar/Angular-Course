import { TestBed } from '@angular/core/testing';

import { IcontactService } from './icontact.service';

describe('IcontactService', () => {
  let service: IcontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
