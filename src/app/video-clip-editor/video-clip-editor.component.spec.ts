import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoClipEditorComponent } from './video-clip-editor.component';

describe('VideoClipEditorComponent', () => {
  let component: VideoClipEditorComponent;
  let fixture: ComponentFixture<VideoClipEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoClipEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoClipEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
