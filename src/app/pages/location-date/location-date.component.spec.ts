import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDateComponent } from './location-date.component';

describe('LocationDateComponent', () => {
  let component: LocationDateComponent;
  let fixture: ComponentFixture<LocationDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
