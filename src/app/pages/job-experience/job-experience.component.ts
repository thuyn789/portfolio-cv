import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job-experience',
  templateUrl: './job-experience.component.html',
  styleUrls: ['./job-experience.component.css'],
})
export class JobExperienceComponent implements OnInit {
  @Output() title = 'Experience';

  constructor() {}

  ngOnInit(): void {}
}
