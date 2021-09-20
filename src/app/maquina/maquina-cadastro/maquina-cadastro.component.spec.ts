import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaCadastroComponent } from './maquina-cadastro.component';

describe('MaquinaCadastroComponent', () => {
  let component: MaquinaCadastroComponent;
  let fixture: ComponentFixture<MaquinaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquinaCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
