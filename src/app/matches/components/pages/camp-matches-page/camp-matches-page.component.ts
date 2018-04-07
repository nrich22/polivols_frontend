import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatProgressBar, MatDialog} from '@angular/material';
import {MatchesService} from '../../../services/matches.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {EmailFormComponent} from '../../forms/email-form/email-form.component';

export interface VolElement {
  id: number;
  name: string;
  zip_code: string;
  state: string;
  hours: number;
  party: string;
  issues: string;
}

@Component({
  selector: 'app-camp-matches-page',
  templateUrl: './camp-matches-page.component.html',
  styleUrls: ['./camp-matches-page.component.css']
})
export class CampMatchesPageComponent implements OnInit, AfterViewInit {
  subject: string;
  message: string;
  recipient_list = [];
  currNumVols;
  numDesiredVols;
  displayedColumns = ['name', 'zip_code', 'state', 'hours', 'party', 'issues'];
  dataSource: MatTableDataSource<VolElement>;
  constructor(
    private authService: AuthenticationService,
    private matchService: MatchesService,
    private router: Router,
    public dialog: MatDialog) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.matchService.getCampMatches()
      .subscribe((matches: any[]) => {
        const volunteers: VolElement[] = [];
        this.currNumVols = matches.length;
        for (const match of matches) {
          this.numDesiredVols = match.campaign.num_vols;
          this.recipient_list.push(match.volunteer.email);
          volunteers.push({
            id: match.volunteer.id,
            name: `${match.volunteer.first_name} ${match.volunteer.last_name}`,
            zip_code: match.volunteer.zip_code,
            state: match.volunteer.state,
            hours: match.volunteer.hrs_per_week,
            party: match.volunteer.party,
            issues: match.volunteer.issues
          });
        }
        this.dataSource.data = volunteers;
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.recipient_list);
    this.matchService.setRecipientList(this.recipient_list);
  }
  Done() {
    if (this.authService.currentUser().is_campaign) {
      this.router.navigate(['/camp_profile']);
    } else {
      this.router.navigate(['/profile']);
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EmailFormComponent, {
      width: '500px',
      data: { subject: this.subject, message: this.message, recipient_list: this.recipient_list }
    });

    // dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed');
    // this.animal = result;
    // });
  }
}
