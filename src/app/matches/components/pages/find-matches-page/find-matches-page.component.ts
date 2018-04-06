import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {MatchesService} from '../../../services/matches.service';

export interface Element {
  id: number;
  name: string;
  zip_code: string;
  state: string;
  issues: string;
  link: string;
  num_vols: number;
  hours: number;
}

@Component({
  selector: 'app-find-matches-page',
  templateUrl: './find-matches-page.component.html',
  styleUrls: ['./find-matches-page.component.css']
})

export class FindMatchesPageComponent implements AfterViewInit, OnInit {
  displayedColumns = ['name', 'zip_code', 'state', 'hours', 'num_vols', 'issues', 'link', 'interested'];
  dataSource: MatTableDataSource<Element>;
  constructor(private matchService: MatchesService, private router: Router) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource = new MatTableDataSource([]);
    this.matchService.getPotentialMatches()
      .subscribe((matches: any[]) => {
        const elements: Element[] = [];
        for (const match of matches) {
          elements.push({
            id: match.id,
            name: `${match.first_name} ${match.last_name}`,
            zip_code: match.zip_code,
            state: match.state,
            issues: match.issues,
            link: match.link,
            num_vols: match.num_vols,
            hours: match.hrs_per_week
          });
        }
        this.dataSource.data = elements;
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  createMatch(element) {
    this.matchService.createMatch(element.id).subscribe();
  }
}
