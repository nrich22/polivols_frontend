import { Component, OnInit } from '@angular/core';
import {IssuesService} from '../../../services/issues.service';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-issues-mobile-form',
  providers: [IssuesService],
  templateUrl: './issues-mobile-form.component.html',
  styleUrls: ['./issues-mobile-form.component.css']
})

export class IssuesMobileFormComponent implements OnInit {
  issues;
  selected_issues = [];
  fullImagePath;

  constructor(
    private authService: AuthenticationService,
    private issueService: IssuesService,
    private router: Router ) {
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
