import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidosCongeladorPage } from './contenidos-congelador.page';

describe('ContenidosCongeladorPage', () => {
  let component: ContenidosCongeladorPage;
  let fixture: ComponentFixture<ContenidosCongeladorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidosCongeladorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidosCongeladorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
