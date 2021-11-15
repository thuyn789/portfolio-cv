import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent implements OnInit {
  @Output() title = 'Hobbies';

  constructor() {}

  ngOnInit(): void {}
}
