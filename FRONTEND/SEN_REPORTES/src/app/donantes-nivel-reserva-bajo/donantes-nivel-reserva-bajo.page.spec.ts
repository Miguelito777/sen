import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonantesNivelReservaBajoPage } from './donantes-nivel-reserva-bajo.page';

describe('DonantesNivelReservaBajoPage', () => {
  let component: DonantesNivelReservaBajoPage;
  let fixture: ComponentFixture<DonantesNivelReservaBajoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonantesNivelReservaBajoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonantesNivelReservaBajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
