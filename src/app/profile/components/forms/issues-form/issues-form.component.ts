import { Component, OnInit } from '@angular/core';
import {IssuesService} from '../../../services/issues.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';

@Component({
  selector: 'app-issues-form',
  providers: [IssuesService],
  templateUrl: './issues-form.component.html',
  styleUrls: ['./issues-form.component.css']
})
export class IssuesFormComponent implements OnInit {
  issues;
  selected_issues = [];

  constructor(
    private authService: AuthenticationService,
    private issueService: IssuesService,
    private router: Router ) {}

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
    console.log(this.selected_issues);
  }
  updateIssues() {
    this.issueService.updateIssues(this.selected_issues).subscribe(result => {
      if (this.authService.currentUser().is_campaign) {
        this.router.navigate(['/camp_profile']);
      } else {
        this.router.navigate(['/profile']);
      }
    });
  }
  skipForNow() {
    if (this.authService.currentUser().is_campaign) {
      this.router.navigate(['/camp_profile']);
    } else {
      this.router.navigate(['/profile']);
    }
  }
}
