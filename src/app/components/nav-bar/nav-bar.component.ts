import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  pageTitle = 'Home';

  displayPageTitle(pageTitle: string): void {
    this.pageTitle = pageTitle;
  }
}
