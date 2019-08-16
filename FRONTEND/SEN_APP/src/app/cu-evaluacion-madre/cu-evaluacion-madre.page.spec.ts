import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuEvaluacionMadrePage } from './cu-evaluacion-madre.page';

describe('CuEvaluacionMadrePage', () => {
  let component: CuEvaluacionMadrePage;
  let fixture: ComponentFixture<CuEvaluacionMadrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuEvaluacionMadrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuEvaluacionMadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
