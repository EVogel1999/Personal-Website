import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project';
import { ProjectService } from '../services/project.service';

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
    'Professional',
    'Personal',
    'Coursework',
    'Awarded'
  ];

  // {
  //   name: 'Agility - Agile Project Management System',
  //   description: 'Agility aimed to make project management systems easier to use by providing a simple user interface. ' +
  //                'It was built using Angular, Express, and MongoDB and deployed using Firebase and Heroku.  This was the ' +
  //                'term project for the Software Engineering course at Towson University and won Best Design and People\'s ' +
  //                'Choice and the Software Engineering Club\'s Project Expo.',
  //   tags: ['Angular', 'MongoDB', 'Express', 'Coursework', 'Awarded'],
  //   start: new Date(),
  //   end: new Date(),
  //   image: 'https://avatars0.githubusercontent.com/u/47090317?s=200&v=4',
  //   repository: 'https://github.com/cosc412'
  // },

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().then(projects => {
      this.projects = projects;
    });
  }

}
