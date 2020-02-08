import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPopupComponent } from './additional-popup.component';

describe('AdditionalPopupComponent', () => {
  let component: AdditionalPopupComponent;
  let fixture: ComponentFixture<AdditionalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
