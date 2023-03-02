import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('navigation_header') navigationHeader: any;
  showSidebar: boolean = false;

  togleSidebar() {
    let screenWidth = window.screen.width;

    if (screenWidth < 801) {
      this.showSidebar = !this.showSidebar;
      let sidebar = this.navigationHeader.nativeElement;

      if (!this.showSidebar) {
        sidebar.style.top = '-700%';
      } else {
        sidebar.style.top = '0%';
      }
    }
  }
}
