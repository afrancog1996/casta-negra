import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'casta-negra';

  windowWidth: number;
  isMobile: boolean;

  constructor() {
    this.isMobile = window.innerWidth < 868;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowWidth = window.innerWidth;
    console.log(this.windowWidth);
    console.log(this.isMobile);
    this.isMobile = this.windowWidth < 868;
  }
}
