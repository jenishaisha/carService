import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public currentImgSrc = "";
  public showImageViewer = false;
  
  public showImage(url: string){
    this.currentImgSrc = url;
    this.showImageViewer = true;
    document.body.classList.add("overflow-hidden")
  }

  public hideImage(){
    this.showImageViewer = false;
    document.body.classList.remove("overflow-hidden")
  }
}


