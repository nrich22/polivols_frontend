import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampProfilePageComponent } from './camp-profile-page.component';

describe('CampProfilePageComponent', () => {
  let component: CampProfilePageComponent;
  let fixture: ComponentFixture<CampProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
