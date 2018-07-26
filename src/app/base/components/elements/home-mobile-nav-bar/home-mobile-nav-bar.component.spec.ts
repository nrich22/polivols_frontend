import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMobileNavBarComponent } from './home-mobile-nav-bar.component';

describe('HomeMobileNavBarComponent', () => {
  let component: HomeMobileNavBarComponent;
  let fixture: ComponentFixture<HomeMobileNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMobileNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMobileNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
