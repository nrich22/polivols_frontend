import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatchesService} from '../../../services/matches.service';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';

export interface Element {
  id: number;
  name: string;
  zip_code: string;
  state: string;
  issues: string;
  link: string;
  party: string;
  gov_level: string;
  issues_in_common;
}

@Component({
  selector: 'app-find-matches-mobile-form',
  templateUrl: './find-matches-mobile-form.component.html',
  styleUrls: ['./find-matches-mobile-form.component.css']
})

export class FindMatchesMobileFormComponent implements OnInit {
  numCamps;
  campaigns: Element[];
  constructor(private authService: AuthenticationService, private matchService: MatchesService, private router: Router) {}
  ngOnInit() {
    this.matchService.getPotentialMatches()
      .subscribe((matches: any[]) => {
        this.numCamps = matches.length;
        this.campaigns = [];
        for (const match of matches) {
          this.campaigns.push({
            id: match.id,
            name: match.camp_name,
            zip_code: match.zip_code,
            state: match.state,
            issues: match.issues,
            link: match.link,
            party: this.getParty(match.party),
            gov_level: this.getGovLevel(match.level),
            issues_in_common: match.issues_in_common
          });
        }
      });
  }
  createMatch(element) {
    this.matchService.createMatch(element.id).subscribe();
  }
  getGovLevel(gov_level) {
    if (gov_level === 'S') {
      return 'State';
    }
    if (gov_level === 'F') {
      return 'Federal';
    }
    if (gov_level === 'L') {
      return 'Local';
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
