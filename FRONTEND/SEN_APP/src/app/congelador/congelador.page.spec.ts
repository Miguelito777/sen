import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeladorPage } from './congelador.page';

describe('CongeladorPage', () => {
  let component: CongeladorPage;
  let fixture: ComponentFixture<CongeladorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeladorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeladorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
