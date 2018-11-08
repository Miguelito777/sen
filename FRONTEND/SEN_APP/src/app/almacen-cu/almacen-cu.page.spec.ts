import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenCUPage } from './almacen-cu.page';

describe('AlmacenCUPage', () => {
  let component: AlmacenCUPage;
  let fixture: ComponentFixture<AlmacenCUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenCUPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenCUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
