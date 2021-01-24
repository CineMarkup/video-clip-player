import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainVideoComponent } from './main-video.component';

describe('MainVideoComponent', () => {
  let component: MainVideoComponent;
  let fixture: ComponentFixture<MainVideoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
