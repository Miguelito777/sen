import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidosCongeladorCUPage } from './contenidos-congelador-cu.page';

describe('ContenidosCongeladorCUPage', () => {
  let component: ContenidosCongeladorCUPage;
  let fixture: ComponentFixture<ContenidosCongeladorCUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidosCongeladorCUPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidosCongeladorCUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
