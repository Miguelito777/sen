import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonantesTipoSangrePage } from './donantes-tipo-sangre.page';

describe('DonantesTipoSangrePage', () => {
  let component: DonantesTipoSangrePage;
  let fixture: ComponentFixture<DonantesTipoSangrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonantesTipoSangrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonantesTipoSangrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
