import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSangreCUPage } from './tipo-sangre-cu.page';

describe('TipoSangreCUPage', () => {
  let component: TipoSangreCUPage;
  let fixture: ComponentFixture<TipoSangreCUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSangreCUPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSangreCUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
