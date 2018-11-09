import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonantesNivelReservaPage } from './donantes-nivel-reserva.page';

describe('DonantesNivelReservaPage', () => {
  let component: DonantesNivelReservaPage;
  let fixture: ComponentFixture<DonantesNivelReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonantesNivelReservaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonantesNivelReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
