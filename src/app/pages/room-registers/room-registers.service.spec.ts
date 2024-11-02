import { TestBed } from '@angular/core/testing';

import { RoomRegistersService } from './room-registers.service';

describe('RoomRegistersService', () => {
  let service: RoomRegistersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomRegistersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
