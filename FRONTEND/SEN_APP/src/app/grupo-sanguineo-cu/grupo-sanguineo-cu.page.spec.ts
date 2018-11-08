import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoSanguineoCUPage } from './grupo-sanguineo-cu.page';

describe('GrupoSanguineoCUPage', () => {
  let component: GrupoSanguineoCUPage;
  let fixture: ComponentFixture<GrupoSanguineoCUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoSanguineoCUPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoSanguineoCUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
