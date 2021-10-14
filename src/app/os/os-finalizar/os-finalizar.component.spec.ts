import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsFinalizarComponent } from './os-finalizar.component';

describe('OsFinalizarComponent', () => {
  let component: OsFinalizarComponent;
  let fixture: ComponentFixture<OsFinalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsFinalizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
