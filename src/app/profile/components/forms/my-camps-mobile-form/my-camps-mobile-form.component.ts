import {Component, OnInit} from '@angular/core';
import {MatchesService} from '../../../../matches/services/matches.service';

export interface CampElement {
  match_id: number;
  id: number;
  name: string;
  zip_code: string;
  state: string;
  party: string;
  gov_level: string;
  link: string;
}

@Component({
  selector: 'app-my-camps-mobile-form',
  templateUrl: './my-camps-mobile-form.component.html',
  styleUrls: ['./my-camps-mobile-form.component.css']
})
export class MyCampsMobileFormComponent implements OnInit {
  currNumCamps;
  campaigns: CampElement[];
  constructor(private matchService: MatchesService) {}
  ngOnInit() {
    this.campaigns = [];
    this.matchService.getVolMatches()
      .subscribe((matches: any[]) => {
        this.currNumCamps = matches.length;
        for (const match of matches) {
          this.campaigns.push({
            match_id: match.id,
            id: match.campaign.id,
            name: match.campaign.camp_name,
            zip_code: match.campaign.zip_code,
            state: match.campaign.state,
            link: match.campaign.link,
            party: this.getParty(match.campaign.party),
            gov_level: this.getGovLevel(match.campaign.level)
          });
        }
      });
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
  deleteMatch(element) {
    this.currNumCamps -= 1;
    this.campaigns = this.campaigns.filter(goodElement => goodElement.id !== element.id);
    this.matchService.deleteMatch(element.match_id).subscribe();
  }
}

