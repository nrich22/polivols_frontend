import { Component, OnInit } from '@angular/core';
import {MatchesService} from '../../../services/matches.service';

export interface MatchElement {
  match_id: number;
  vol_id: number;
  camp_id: number;
  camp_name: string;
  vol_hrs: number;
  vol_calls: number;
  vol_knocks: number;
}

@Component({
  selector: 'app-vol-logs-mobile-form',
  templateUrl: './vol-logs-mobile-form.component.html',
  styleUrls: ['./vol-logs-mobile-form.component.css']
})
export class VolLogsMobileFormComponent implements OnInit {
  volunteers: MatchElement [];
  vol_hrs = 0;
  vol_calls = 0;
  vol_knocks = 0;
  constructor(private matchService: MatchesService) { }

  ngOnInit() {
    this.matchService.getCampMatches()
      .subscribe((matches: any[]) => {
        const elements: MatchElement[] = [];
        for (const match of matches) {
          this.vol_hrs += match.vol_hrs;
          this.vol_calls += match.vol_calls;
          this.vol_knocks += match.vol_knocks;
          elements.push({
            match_id: match.id,
            vol_id: match.volunteer.id,
            camp_id: match.campaign.id,
            camp_name: match.campaign.camp_name,
            vol_hrs: match.vol_hrs,
            vol_calls: match.vol_calls,
            vol_knocks: match.vol_knocks
          });
          this.volunteers = elements;
        }
      });
  }
}

