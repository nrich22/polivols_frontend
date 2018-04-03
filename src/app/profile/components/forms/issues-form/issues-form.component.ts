import { Component, OnInit } from '@angular/core';
import {IssuesService} from '../../../services/issues.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-issues-form',
  providers: [IssuesService],
  templateUrl: './issues-form.component.html',
  styleUrls: ['./issues-form.component.css']
})
export class IssuesFormComponent implements OnInit {
  issues;

  constructor(
    private issueService: IssuesService,
    private router: Router ) {}

  ngOnInit() {
    this.issueService.getIssues().subscribe((data: any[]) => this.issues = data.map(issue => issue.title));
  }
}
