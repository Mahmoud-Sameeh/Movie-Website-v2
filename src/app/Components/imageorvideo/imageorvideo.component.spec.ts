import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageorvideoComponent } from './imageorvideo.component';

describe('ImageorvideoComponent', () => {
  let component: ImageorvideoComponent;
  let fixture: ComponentFixture<ImageorvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageorvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageorvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
