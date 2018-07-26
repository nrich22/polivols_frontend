import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTable, MatTableDataSource, MatSort, MatSnackBar} from '@angular/material';
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
  selector: 'app-find-matches-page',
  templateUrl: './find-matches-page.component.html',
  styleUrls: ['./find-matches-page.component.css']
})

export class FindMatchesPageComponent implements AfterViewInit, OnInit {
  numCamps;
  message: string;
  displayedColumns = ['name', 'party', 'gov_level', 'zip_code', 'state', 'issues_in_common', 'link', 'interested'];
  dataSource: MatTableDataSource<Element>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private authService: AuthenticationService, private matchService: MatchesService, private router: Router,
              public snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource([]);
  }
  ngOnInit() {
    this.matchService.getPotentialMatches()
      .subscribe((matches: any[]) => {
        const elements: Element[] = [];
        this.numCamps = matches.length;
        for (const match of matches) {
          elements.push({
            id: match.id,
            name: match.camp_name,
            zip_code: match.zip_code,
            state: match.state,
            issues: match.issues,
            link: match.link,
            party: match.party,
            gov_level: this.getGovLevel(match.level),
            issues_in_common: match.issues_in_common
          });
        }
        this.dataSource.data = elements;
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  openSnackBar(campElement: Element) {
    this.message = 'You are now a Volunteer for ' + campElement.name;
    this.snackBar.open(this.message, null, {
      duration: 5000,
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  createMatch(element) {
    this.numCamps -= 1;
    this.dataSource.data = this.dataSource.data.filter(goodElement => goodElement.id !== element.id);
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
}
