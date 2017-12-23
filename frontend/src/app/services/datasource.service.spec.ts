import { TestBed, inject } from '@angular/core/testing';

import { ServiceDatasourceService } from './service-datasource.service';

describe('ServiceDatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDatasourceService]
    });
  });

  it('should be created', inject([ServiceDatasourceService], (service: ServiceDatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
