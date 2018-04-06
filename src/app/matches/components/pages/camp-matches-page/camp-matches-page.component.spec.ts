import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampMatchesPageComponent } from './camp-matches-page.component';

describe('CampMatchesPageComponent', () => {
  let component: CampMatchesPageComponent;
  let fixture: ComponentFixture<CampMatchesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampMatchesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampMatchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
