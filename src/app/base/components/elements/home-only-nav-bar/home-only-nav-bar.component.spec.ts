import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOnlyNavBarComponent } from './home-only-nav-bar.component';

describe('HomeOnlyNavBarComponent', () => {
  let component: HomeOnlyNavBarComponent;
  let fixture: ComponentFixture<HomeOnlyNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOnlyNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOnlyNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
