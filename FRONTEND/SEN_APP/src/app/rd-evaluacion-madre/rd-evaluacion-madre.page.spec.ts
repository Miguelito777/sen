import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdEvaluacionMadrePage } from './rd-evaluacion-madre.page';

describe('RdEvaluacionMadrePage', () => {
  let component: RdEvaluacionMadrePage;
  let fixture: ComponentFixture<RdEvaluacionMadrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdEvaluacionMadrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdEvaluacionMadrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
