import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from 'src/app/shared/project-dialog/project-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() project: Project;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ProjectDialogComponent, {
      data: { project: this.project }
    });
  }

}
