import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {IssuesService} from '../../../services/issues.service';

@Component({
  selector: 'app-change-issues-mobile-form',
  providers: [IssuesService],
  templateUrl: './change-issues-mobile-form.component.html',
  styleUrls: ['./change-issues-mobile-form.component.css']
})
export class ChangeIssuesMobileFormComponent implements OnInit {
  issues;
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
    this.issueService.updateIssues(this.selected_issues).subscribe(result => {this.updated = true; });
  }
}
