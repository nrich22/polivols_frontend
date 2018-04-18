import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatchesService} from '../../../../matches/services/matches.service';

export interface CampElement {
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
  displayedColumns = ['name', 'party', 'gov_level', 'zip_code', 'state', 'link'];
  dataSource: MatTableDataSource<CampElement>;
  constructor(private matchService: MatchesService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.matchService.getVolMatches()
      .subscribe((matches: any[]) => {
        const elements: CampElement[] = [];
        this.currNumCamps = matches.length;
        for (const match of matches) {
          elements.push({
            id: match.campaign.id,
            name: `${match.campaign.first_name} ${match.campaign.last_name}`,
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
