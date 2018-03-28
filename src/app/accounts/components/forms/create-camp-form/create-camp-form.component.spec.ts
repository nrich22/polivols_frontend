import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampFormComponent } from './create-camp-form.component';

describe('CreateCampFormComponent', () => {
  let component: CreateCampFormComponent;
  let fixture: ComponentFixture<CreateCampFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCampFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCampFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
