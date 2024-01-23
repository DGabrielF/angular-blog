import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result = data.applications;

  constructor() { }

  ngOnInit(): void {
  }

}
