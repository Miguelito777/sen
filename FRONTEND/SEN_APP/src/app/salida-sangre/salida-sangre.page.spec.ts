import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaSangrePage } from './salida-sangre.page';

describe('SalidaSangrePage', () => {
  let component: SalidaSangrePage;
  let fixture: ComponentFixture<SalidaSangrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaSangrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaSangrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
