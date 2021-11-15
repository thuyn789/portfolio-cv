import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  @Output() title = 'Projects';

  constructor() {}

  ngOnInit(): void {}
}
