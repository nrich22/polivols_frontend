import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVolsFormComponent } from './my-vols-form.component';

describe('MyVolsFormComponent', () => {
  let component: MyVolsFormComponent;
  let fixture: ComponentFixture<MyVolsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVolsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVolsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
