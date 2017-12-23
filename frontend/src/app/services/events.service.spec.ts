import { TestBed, inject } from '@angular/core/testing';

import { ServiceEventsService } from './service-events.service';

describe('ServiceEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceEventsService]
    });
  });

  it('should be created', inject([ServiceEventsService], (service: ServiceEventsService) => {
    expect(service).toBeTruthy();
  }));
});
