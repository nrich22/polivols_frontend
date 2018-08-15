import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventsFormComponent } from './create-events-form.component';

describe('CreateEventsFormComponent', () => {
  let component: CreateEventsFormComponent;
  let fixture: ComponentFixture<CreateEventsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
