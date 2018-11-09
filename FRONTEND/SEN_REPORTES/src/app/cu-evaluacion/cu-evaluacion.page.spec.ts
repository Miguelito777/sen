import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuEvaluacionPage } from './cu-evaluacion.page';

describe('CuEvaluacionPage', () => {
  let component: CuEvaluacionPage;
  let fixture: ComponentFixture<CuEvaluacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuEvaluacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuEvaluacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
