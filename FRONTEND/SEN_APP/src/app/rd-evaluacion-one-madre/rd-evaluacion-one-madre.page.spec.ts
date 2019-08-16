import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdEvaluacionOneMadrePage } from './rd-evaluacion-one-madre.page';

describe('RdEvaluacionOneMadrePage', () => {
  let component: RdEvaluacionOneMadrePage;
  let fixture: ComponentFixture<RdEvaluacionOneMadrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdEvaluacionOneMadrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdEvaluacionOneMadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
