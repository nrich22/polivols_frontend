import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampEventsFormComponent } from './camp-events-form.component';

describe('CampEventsFormComponent', () => {
  let component: CampEventsFormComponent;
  let fixture: ComponentFixture<CampEventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampEventsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
