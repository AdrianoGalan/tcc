import { TestBed } from '@angular/core/testing';

import { MaquinaServiceService } from './maquina.service';

describe('MaquinaServiceService', () => {
  let service: MaquinaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaquinaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
