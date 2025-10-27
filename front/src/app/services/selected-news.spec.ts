import { TestBed } from '@angular/core/testing';

import { SelectedNewsService } from './selected-news';

describe('SelectedNews', () => {
  let service: SelectedNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
