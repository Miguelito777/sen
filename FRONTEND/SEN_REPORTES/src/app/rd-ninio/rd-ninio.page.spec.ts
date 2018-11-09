import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdNinioPage } from './rd-ninio.page';

describe('RdNinioPage', () => {
  let component: RdNinioPage;
  let fixture: ComponentFixture<RdNinioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdNinioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdNinioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
