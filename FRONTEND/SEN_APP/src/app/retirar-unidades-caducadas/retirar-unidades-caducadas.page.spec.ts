import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirarUnidadesCaducadasPage } from './retirar-unidades-caducadas.page';

describe('RetirarUnidadesCaducadasPage', () => {
  let component: RetirarUnidadesCaducadasPage;
  let fixture: ComponentFixture<RetirarUnidadesCaducadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirarUnidadesCaducadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirarUnidadesCaducadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
