import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampEventsMobileFormComponent } from './camp-events-mobile-form.component';

describe('CampEventsMobileFormComponent', () => {
  let component: CampEventsMobileFormComponent;
  let fixture: ComponentFixture<CampEventsMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampEventsMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampEventsMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
