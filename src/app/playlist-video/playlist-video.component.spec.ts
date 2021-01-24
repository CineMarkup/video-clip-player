import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlaylistVideoComponent } from './playlist-video.component';

describe('PlaylistVideoComponent', () => {
  let component: PlaylistVideoComponent;
  let fixture: ComponentFixture<PlaylistVideoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
