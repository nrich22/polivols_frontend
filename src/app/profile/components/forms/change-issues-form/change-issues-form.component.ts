import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {IssuesService} from '../../../services/issues.service';
import any = jasmine.any;

@Component({
  selector: 'app-change-issues-form',
  providers: [IssuesService],
  templateUrl: './change-issues-form.component.html',
  styleUrls: ['./change-issues-form.component.css']
})
export class ChangeIssuesFormComponent implements OnInit {
  issues;
  user;
  user_issues;
  updated: boolean;
  selected_issues = [];
  fullImagePath;

  constructor(
    private authService: AuthenticationService,
    private issueService: IssuesService) {
    this.fullImagePath = 'assets/logo1.png';
  }

  ngOnInit() {
    this.issueService.getIssues().subscribe((data: any[]) => this.issues = data.map(issue => issue.title));
    // this.issueService.getUser().subscribe(data => this.user = data);
  }
  updateIssuesList(title) {
    if (!this.selected_issues.includes(title)) {
      this.selected_issues.push(title);
    } else {
      const index: number = this.selected_issues.indexOf(title);
      delete this.selected_issues[index];
    }
  }
  updateIssues() {
    this.issueService.getUser().subscribe(data => this.user = data);
  }
}
