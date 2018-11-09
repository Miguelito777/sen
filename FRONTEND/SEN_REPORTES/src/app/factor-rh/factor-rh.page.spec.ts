import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorRhPage } from './factor-rh.page';

describe('FactorRhPage', () => {
  let component: FactorRhPage;
  let fixture: ComponentFixture<FactorRhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorRhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorRhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
