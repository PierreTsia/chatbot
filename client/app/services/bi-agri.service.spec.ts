import { TestBed, inject } from '@angular/core/testing';

import { BiAgriService } from './bi-agri.service';

describe('BiAgriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiAgriService]
    });
  });

  it('should be created', inject([BiAgriService], (service: BiAgriService) => {
    expect(service).toBeTruthy();
  }));
});
