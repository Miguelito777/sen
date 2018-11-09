import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesCUPage } from './unidades-cu.page';

describe('UnidadesCUPage', () => {
  let component: UnidadesCUPage;
  let fixture: ComponentFixture<UnidadesCUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesCUPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesCUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
