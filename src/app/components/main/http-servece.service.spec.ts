import { TestBed } from '@angular/core/testing';

import { HttpServeceService } from './http-servece.service';

describe('HttpServeceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpServeceService = TestBed.get(HttpServeceService);
    expect(service).toBeTruthy();
  });
});
