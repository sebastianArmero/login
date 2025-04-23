import { TestBed } from '@angular/core/testing';

import { DiasInhabilesService } from './dias-inhabiles.service';

describe('DiasInhabilesService', () => {
  let service: DiasInhabilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiasInhabilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
