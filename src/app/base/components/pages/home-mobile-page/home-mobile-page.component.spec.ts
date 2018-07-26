import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMobilePageComponent } from './home-mobile-page.component';

describe('HomeMobilePageComponent', () => {
  let component: HomeMobilePageComponent;
  let fixture: ComponentFixture<HomeMobilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMobilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMobilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
