import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  selector: 'app-logs-form',
  templateUrl: './logs-form.component.html',
  styleUrls: ['./logs-form.component.css']
})
export class LogsFormComponent implements OnInit {
  form: FormGroup;
  campaigns: MatchElement [];
  selected = false;
  curr_camp_name: string;
  curr_camp_id: number;
  curr_vol_hrs: number;
  curr_vol_calls: number;
  curr_vol_knocks: number;
  up_vol_hrs: number;
  up_vol_calls: number;
  up_vol_knocks: number;
  constructor(private _formBuilder: FormBuilder, private matchService: MatchesService) { }

  ngOnInit() {
    this.matchService.getVolMatches()
      .subscribe((matches: any[]) => {
        const elements: MatchElement[] = [];
        for (const match of matches) {
          elements.push({
            match_id: match.id,
            vol_id: match.volunteer.id,
            camp_id: match.campaign.id,
            camp_name: match.campaign.camp_name,
            vol_hrs: match.vol_hrs,
            vol_calls: match.vol_calls,
            vol_knocks: match.vol_knocks
          });
          this.campaigns = elements;
        }
      });
    this.form = this._formBuilder.group({
      camp: new FormControl('', []),
      vol_hrs: new FormControl('', [
        Validators.min(0),
      ]),
      vol_calls: new FormControl('', [
        Validators.min(0),
      ]),
      vol_knocks: new FormControl('', [
        Validators.min(0),
      ]),
    });
  }
  updateMatch() {
    if (this.form.get('vol_hrs').value === '') {
      this.up_vol_hrs = this.curr_vol_hrs;
    } else {
      this.up_vol_hrs = this.form.get('vol_hrs').value;
    }
    if (this.form.get('vol_calls').value === '') {
      this.up_vol_calls = this.curr_vol_calls;
    } else {
      this.up_vol_calls = this.form.get('vol_calls').value;
    }
    if (this.form.get('vol_knocks').value === '') {
      this.up_vol_knocks = this.curr_vol_knocks;
    } else {
      this.up_vol_knocks = this.form.get('vol_knocks').value;
    }
    this.matchService.updateMatch(this.curr_camp_id, this.up_vol_hrs, this.up_vol_calls, this.up_vol_knocks).subscribe();
    for (let camp of this.campaigns) {
      if (camp.camp_name === this.curr_camp_name) {
        camp.vol_hrs = this.up_vol_hrs;
        camp.vol_calls = this.up_vol_calls;
        camp.vol_knocks = this.up_vol_knocks;
      }
    }
  }
  selectCamp() {
    this.selected = true;
    this.curr_camp_name = this.form.get('camp').value;
    for (let camp of this.campaigns) {
      if (camp.camp_name === this.curr_camp_name) {
        this.curr_camp_id = camp.camp_id;
        this.curr_vol_hrs = camp.vol_hrs;
        this.curr_vol_calls = camp.vol_calls;
        this.curr_vol_knocks = camp.vol_knocks;
      }
    }

  }
}
