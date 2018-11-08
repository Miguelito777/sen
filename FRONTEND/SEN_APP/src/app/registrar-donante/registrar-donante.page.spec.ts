import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDonantePage } from './registrar-donante.page';

describe('RegistrarDonantePage', () => {
  let component: RegistrarDonantePage;
  let fixture: ComponentFixture<RegistrarDonantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDonantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDonantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
