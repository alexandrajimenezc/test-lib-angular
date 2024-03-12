import { TestBed } from '@angular/core/testing';

import { OrinocoService } from './orinoco.service';

describe('OrinocoService', () => {
  let service: OrinocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrinocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
