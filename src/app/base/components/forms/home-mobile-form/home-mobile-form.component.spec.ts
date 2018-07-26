import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMobileFormComponent } from './home-mobile-form.component';

describe('HomeMobileFormComponent', () => {
  let component: HomeMobileFormComponent;
  let fixture: ComponentFixture<HomeMobileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMobileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMobileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
