import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsAtualizarComponent } from './os-atualizar.component';

describe('OsAtualizarComponent', () => {
  let component: OsAtualizarComponent;
  let fixture: ComponentFixture<OsAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
