import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Header';
  @Input() pageTitle?: string;

  constructor() {}

  ngOnInit(): void {
    this.pageTitle = 'Home';
  }
}
