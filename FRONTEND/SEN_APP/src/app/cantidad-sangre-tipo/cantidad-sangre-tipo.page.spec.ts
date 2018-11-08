import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadSangreTipoPage } from './cantidad-sangre-tipo.page';

describe('CantidadSangreTipoPage', () => {
  let component: CantidadSangreTipoPage;
  let fixture: ComponentFixture<CantidadSangreTipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadSangreTipoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadSangreTipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
