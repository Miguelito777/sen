import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorRhCUPage } from './factor-rh-cu.page';

describe('FactorRhCUPage', () => {
  let component: FactorRhCUPage;
  let fixture: ComponentFixture<FactorRhCUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorRhCUPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorRhCUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
