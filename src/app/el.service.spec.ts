import { TestBed } from '@angular/core/testing';

import { ElService } from './el.service';

describe('ElService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElService = TestBed.get(ElService);
    expect(service).toBeTruthy();
  });
});
