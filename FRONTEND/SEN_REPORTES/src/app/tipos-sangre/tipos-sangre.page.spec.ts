import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposSangrePage } from './tipos-sangre.page';

describe('TiposSangrePage', () => {
  let component: TiposSangrePage;
  let fixture: ComponentFixture<TiposSangrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposSangrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposSangrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
