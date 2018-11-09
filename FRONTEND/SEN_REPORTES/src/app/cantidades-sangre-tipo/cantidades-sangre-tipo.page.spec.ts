import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadesSangreTipoPage } from './cantidades-sangre-tipo.page';

describe('CantidadesSangreTipoPage', () => {
  let component: CantidadesSangreTipoPage;
  let fixture: ComponentFixture<CantidadesSangreTipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadesSangreTipoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadesSangreTipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
