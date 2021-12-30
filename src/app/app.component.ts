import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 images = ['sourceCodeArt.jpg', 'software-development.jpg', 'dnaBinary.jpg', 'codeScreenSplitted.png'];
currentImage = 0;

ngOnInit() {
this.updateImage();
}



updateImage() {

  setInterval(() => {
    this.currentImage++;
    if(this.currentImage == this.images.length) {
      this.currentImage = 0;
    }
 // = this.currentImage % this.images.length;
  }, 8000);
}


}
