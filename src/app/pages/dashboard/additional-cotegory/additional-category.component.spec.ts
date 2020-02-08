import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalCategoryComponent } from './additional-category.component';

describe('AdditionalCotegoryComponent', () => {
  let component: AdditionalCategoryComponent;
  let fixture: ComponentFixture<AdditionalCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
