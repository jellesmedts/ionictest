import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArghPage } from './argh.page';

describe('ArghPage', () => {
  let component: ArghPage;
  let fixture: ComponentFixture<ArghPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArghPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArghPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
