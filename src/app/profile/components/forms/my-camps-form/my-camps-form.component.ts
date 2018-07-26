import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {MatchesService} from '../../../../matches/services/matches.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

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
  selector: 'app-my-camps-form',
  templateUrl: './my-camps-form.component.html',
  styleUrls: ['./my-camps-form.component.css']
})
export class MyCampsFormComponent implements OnInit, AfterViewInit {
  currNumCamps;
  message: string;
  displayedColumns = ['name', 'party', 'gov_level', 'zip_code', 'state', 'link', 'interested'];
  dataSource: MatTableDataSource<CampElement>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private matchService: MatchesService, public snackBar: MatSnackBar) {}
  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.matchService.getVolMatches()
      .subscribe((matches: any[]) => {
        const elements: CampElement[] = [];
        this.currNumCamps = matches.length;
        for (const match of matches) {
          elements.push({
            match_id: match.id,
            id: match.campaign.id,
            name: match.campaign.camp_name,
            zip_code: match.campaign.zip_code,
            state: match.campaign.state,
            link: match.campaign.link,
            party: match.campaign.party,
            gov_level: this.getGovLevel(match.campaign.level)
          });
        }
        this.dataSource.data = elements;
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openSnackBar(campElement: CampElement) {
    this.message = 'Your no longer a Volunteer for ' + campElement.name;
    this.snackBar.open(this.message, null, {
      duration: 5000,
    });
  }
  deleteMatch(element) {
    this.currNumCamps -= 1;
    this.dataSource.data = this.dataSource.data.filter(goodElement => goodElement.id !== element.id);
    this.matchService.deleteMatch(element.match_id).subscribe();
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
}

