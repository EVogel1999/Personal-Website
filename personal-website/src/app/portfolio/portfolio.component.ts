import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // TODO: Don't hardcode filterables
  filters: string[] = [
    'Angular',
    'MongoDB',
    'Express',
    'Spring Boot',
    'Professional Projects',
    'Passion Projects',
    'Course Projects'
  ];

  constructor() { }

  ngOnInit() {
  }

}
