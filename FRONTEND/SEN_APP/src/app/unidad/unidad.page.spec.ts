import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadPage } from './unidad.page';

describe('UnidadPage', () => {
  let component: UnidadPage;
  let fixture: ComponentFixture<UnidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
