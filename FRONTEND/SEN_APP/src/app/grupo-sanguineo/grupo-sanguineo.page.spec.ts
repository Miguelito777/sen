import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoSanguineoPage } from './grupo-sanguineo.page';

describe('GrupoSanguineoPage', () => {
  let component: GrupoSanguineoPage;
  let fixture: ComponentFixture<GrupoSanguineoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoSanguineoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoSanguineoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
