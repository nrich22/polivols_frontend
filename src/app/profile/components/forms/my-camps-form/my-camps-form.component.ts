import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {MatchesService} from '../../../../matches/services/matches.service';

export interface CampElement {
  id: number;
  name: string;
  zip_code: string;
  state: string;
  party: string;
  link: string;
}

@Component({
  selector: 'app-my-camps-form',
  templateUrl: './my-camps-form.component.html',
  styleUrls: ['./my-camps-form.component.css']
})
export class MyCampsFormComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'zip_code', 'state', 'hours', 'party', 'issues'];
  dataSource: MatTableDataSource<CampElement>;
  constructor(
    private authService: AuthenticationService,
    private matchService: MatchesService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.matchService.getCampMatches()
      .subscribe((matches: any[]) => {
        const campaigns: CampElement[] = [];
        for (const match of matches) {
          campaigns.push({
            id: match.campaign.id,
            name: `${match.campaign.first_name} ${match.campaign.last_name}`,
            zip_code: match.campaign.zip_code,
            state: match.campaign.state,
            party: match.campaign.party,
            link: match.campaign.link
          });
        }
        this.dataSource.data = campaigns;
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
