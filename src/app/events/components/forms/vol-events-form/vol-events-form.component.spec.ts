import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolEventsFormComponent } from './vol-events-form.component';

describe('VolEventsFormComponent', () => {
  let component: VolEventsFormComponent;
  let fixture: ComponentFixture<VolEventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolEventsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
