import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatProgressBar, MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {EmailFormComponent} from '../../forms/email-form/email-form.component';
import {MatchesService} from '../../../../matches/services/matches.service';

export interface VolElement {
  id: number;
  name: string;
  zip_code: string;
  state: string;
  hours: number;
  party: string;
  type: string;
  issues: string;
}

@Component({
  selector: 'app-my-vols-form',
  templateUrl: './my-vols-form.component.html',
  styleUrls: ['./my-vols-form.component.css']
})

export class MyVolsFormComponent implements OnInit, AfterViewInit {
  subject: string;
  message: string;
  recipient_list = [];
  currNumVols;
  numDesiredVols;
  displayedColumns = ['name', 'zip_code', 'state', 'hours', 'party', 'type'];
  dataSource: MatTableDataSource<VolElement>;
  constructor(
    private matchService: MatchesService,
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
            issues: match.volunteer.issues,
            type: this.getVolType(match.volunteer.type)
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
  openDialog(): void {
    const dialogRef = this.dialog.open(EmailFormComponent, {
      width: '500px',
      data: { subject: this.subject, message: this.message, recipient_list: this.recipient_list }
    });
  }
  getVolType(gov_level) {
    if (gov_level === 'E') {
      return 'Work Events';
    }
    if (gov_level === 'P') {
      return 'Make Phone Calls';
    }
    if (gov_level === 'C') {
      return 'Canvasing';
    }
    return '';
  }
}
