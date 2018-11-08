import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonantesPage } from './donantes.page';

describe('DonantesPage', () => {
  let component: DonantesPage;
  let fixture: ComponentFixture<DonantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonantesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
