import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSangrePage } from './registrar-sangre.page';

describe('RegistrarSangrePage', () => {
  let component: RegistrarSangrePage;
  let fixture: ComponentFixture<RegistrarSangrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarSangrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSangrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
