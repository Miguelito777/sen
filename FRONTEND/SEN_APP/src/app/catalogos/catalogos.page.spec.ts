import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosPage } from './catalogos.page';

describe('CatalogosPage', () => {
  let component: CatalogosPage;
  let fixture: ComponentFixture<CatalogosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
