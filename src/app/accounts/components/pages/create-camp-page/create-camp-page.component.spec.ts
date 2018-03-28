import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampPageComponent } from './create-camp-page.component';

describe('CreateCampPageComponent', () => {
  let component: CreateCampPageComponent;
  let fixture: ComponentFixture<CreateCampPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCampPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCampPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
