import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.sass']
})
export class ProjectDialogComponent implements OnInit {

  project: Project;

  constructor(public dialogRef: MatDialogRef<ProjectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.project = data.project;
  }

  ngOnInit() {
  }

}
