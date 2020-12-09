import { TestBed } from '@angular/core/testing';

import { PreventBackGuard } from './prevent-back.guard';

describe('PreventBackGuard', () => {
  let guard: PreventBackGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventBackGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
