import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageorvideo',
  templateUrl: './imageorvideo.component.html',
  styleUrls: ['./imageorvideo.component.css']
})
export class ImageorvideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url;
  format;
  onSelectFile(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      
      }
    }
  }
}
