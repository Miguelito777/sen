import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoSangrePage } from './ingreso-sangre.page';

describe('IngresoSangrePage', () => {
  let component: IngresoSangrePage;
  let fixture: ComponentFixture<IngresoSangrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoSangrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoSangrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
