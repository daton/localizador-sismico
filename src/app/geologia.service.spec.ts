import { TestBed, inject } from '@angular/core/testing';

import { GeologiaService } from './geologia.service';

describe('GeologiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeologiaService]
    });
  });

  it('should be created', inject([GeologiaService], (service: GeologiaService) => {
    expect(service).toBeTruthy();
  }));
});
