import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolEventsPageComponent } from './vol-events-page.component';

describe('VolEventsPageComponent', () => {
  let component: VolEventsPageComponent;
  let fixture: ComponentFixture<VolEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolEventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
