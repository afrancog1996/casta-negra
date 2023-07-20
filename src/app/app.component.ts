import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'casta-negra';

  windowWidth: number;
  isScrollDisabled: boolean = false;
  isMobile: boolean;
  isVisible: boolean = true;
  color = 'warn';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;

  constructor() {
    this.isMobile = window.innerWidth < 868;
    setInterval(() => {
      this.isVisible = false;
    }, 5000);
  }
  
  ngOnInit(): void {

  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowWidth = window.innerWidth;
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
