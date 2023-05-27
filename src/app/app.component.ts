import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'casta-negra';

  windowWidth: number;
  isScrollDisabled: boolean = false;
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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.isScrollDisabled) {
      window.scrollTo(0, 0); // Desplaza la ventana al principio para mantenerla en la parte superior
    }
  }

  toggleScroll() {
    this.isScrollDisabled = !this.isScrollDisabled;
  }
}
