import { TestBed, inject } from '@angular/core/testing';

import { ErrorParserService } from './error-parser.service';

describe('ErrorParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorParserService]
    });
  });

  it('should be created', inject([ErrorParserService], (service: ErrorParserService) => {
    expect(service).toBeTruthy();
  }));
});
