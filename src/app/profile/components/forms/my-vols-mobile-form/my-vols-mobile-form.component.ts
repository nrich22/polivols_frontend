import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatProgressBar, MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {EmailFormComponent} from '../../forms/email-form/email-form.component';
import {MatchesService} from '../../../../matches/services/matches.service';
import {EmailService} from '../../../services/email.service';

export interface VolElement {
  id: number;
  email: string;
  name: string;
  zip_code: string;
  state: string;
  hours: number;
  party: string;
  type: string;
  issues: string;
}

@Component({
  selector: 'app-my-vols-mobile-form',
  templateUrl: './my-vols-mobile-form.component.html',
  styleUrls: ['./my-vols-mobile-form.component.css']
})

export class MyVolsMobileFormComponent implements OnInit {
  subject: string;
  message: string;
  recipient_list = [];
  recipients_list = [];
  currNumVols;
  numDesiredVols;
  volunteers: VolElement[];
  constructor(
    private matchService: MatchesService,
    private authService: AuthenticationService,
    private router: Router,
    private emailService: EmailService,
    public dialog: MatDialog) {}
  ngOnInit() {
    this.matchService.getCampMatches()
      .subscribe((matches: any[]) => {
        this.volunteers = [];
        this.currNumVols = matches.length;
        for (const match of matches) {
          this.numDesiredVols = match.campaign.num_vols;
          this.recipients_list.push(match.volunteer.email);
          this.volunteers.push({
            id: match.volunteer.id,
            email: match.volunteer.email,
            name: `${match.volunteer.first_name} ${match.volunteer.last_name}`,
            zip_code: match.volunteer.zip_code,
            state: match.volunteer.state,
            hours: match.volunteer.hrs_per_week,
            party: this.getParty(match.volunteer.party),
            issues: match.volunteer.issues,
            type: this.getVolType(match.volunteer.type)
          });
        }
      });
  }
  openDialog(): void {
    this.emailService.emailTo = 'All Volunteers';
    this.matchService.setRecipientList(this.recipients_list);
    const dialogRef = this.dialog.open(EmailFormComponent, {
      width: '500px',
      data: { subject: this.subject, message: this.message, recipient_list: this.recipients_list }
    });
  }
  openIndivDialog(element): void {
    this.recipient_list.push(element.email);
    this.emailService.emailTo = element.name;
    this.matchService.setRecipientList(this.recipient_list);
    const dialogRef = this.dialog.open(EmailFormComponent, {
      width: '500px',
      data: { subject: this.subject, message: this.message, recipient_list: this.recipient_list }
    });
  }
  getVolType(gov_level) {
    if (gov_level === 'E') {
      return 'Wants to Work Events';
    }
    if (gov_level === 'P') {
      return 'Wants to Make Phone Calls';
    }
    if (gov_level === 'C') {
      return 'Wants to help by Canvassing';
    }
    return '';
  }
  getParty(party) {
    if (party === 'R') {
      return 'Republican';
    }
    if (party === 'D') {
      return 'Democrat';
    }
    if (party === 'I') {
      return 'Independent';
    }
    if (party === 'G') {
      return 'Green Party';
    }
    if (party === 'L') {
      return 'Libertarian';
    }
    return '';
  }
}
