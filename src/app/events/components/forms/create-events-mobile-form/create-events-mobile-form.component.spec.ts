import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventsMobileFormComponent } from './create-events-mobile-form.component';

describe('CreateEventsMobileFormComponent', () => {
  let component: CreateEventsMobileFormComponent;
  let fixture: ComponentFixture<CreateEventsMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventsMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventsMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
