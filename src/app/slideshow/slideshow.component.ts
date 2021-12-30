import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['sourceCodeArt.jpg', 'software-development.jpg', 'dnaBinary.jpg', 'codeScreenSplitted.png'];
  headlines = ['Bring engeneering to the next level', 'I love to code same as to design', 'Born to code', 'I master challenges'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;
      if (this.currentImage == this.images.length) {
        this.currentImage = 0;
      }
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }


}
