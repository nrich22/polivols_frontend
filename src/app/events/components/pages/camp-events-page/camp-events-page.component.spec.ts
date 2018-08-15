import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampEventsPageComponent } from './camp-events-page.component';

describe('CampEventsPageComponent', () => {
  let component: CampEventsPageComponent;
  let fixture: ComponentFixture<CampEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampEventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
