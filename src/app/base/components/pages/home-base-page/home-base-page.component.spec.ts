import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBasePageComponent } from './home-base-page.component';

describe('HomeBasePageComponent', () => {
  let component: HomeBasePageComponent;
  let fixture: ComponentFixture<HomeBasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
