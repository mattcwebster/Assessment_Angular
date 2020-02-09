import { TestBed } from '@angular/core/testing';

import { BusinessManagementService } from './business-management.service';

describe('BusinessManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessManagementService = TestBed.get(BusinessManagementService);
    expect(service).toBeTruthy();
  });
});
