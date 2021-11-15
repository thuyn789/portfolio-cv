import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  @Output() title = 'Resume';
  pdfSource = './assets/docs/Resume-TinHuynh-git.pdf';

  constructor() {}

  ngOnInit(): void {}
}
