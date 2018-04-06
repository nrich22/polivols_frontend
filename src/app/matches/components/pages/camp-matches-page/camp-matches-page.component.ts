import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatProgressBar} from '@angular/material';
import {MatchesService} from '../../../services/matches.service';
import {Router} from '@angular/router';

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
  currNumVols;
  numDesiredVols;
  displayedColumns = ['name', 'zip_code', 'state', 'hours', 'party', 'issues'];
  dataSource: MatTableDataSource<VolElement>;
  constructor(private matchService: MatchesService, private router: Router) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.matchService.getCampMatches()
      .subscribe((matches: any[]) => {
        const volunteers: VolElement[] = [];
        this.currNumVols = matches.length;
        console.log('curr Vols: ', this.currNumVols);
        for (const match of matches) {
          this.numDesiredVols = match.campaign.num_vols;
          console.log('desired vols: ', this.numDesiredVols);
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
  }
}
