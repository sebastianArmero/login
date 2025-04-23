import { TestBed } from '@angular/core/testing';

import { DiasInhabilesServiceService } from './dias-inhabiles-service.service';

describe('DiasInhabilesServiceService', () => {
  let service: DiasInhabilesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiasInhabilesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
