import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeladorCUPage } from './congelador-cu.page';

describe('CongeladorCUPage', () => {
  let component: CongeladorCUPage;
  let fixture: ComponentFixture<CongeladorCUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeladorCUPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeladorCUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
