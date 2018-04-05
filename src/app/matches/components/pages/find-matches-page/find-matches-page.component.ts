import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {MatchesService} from '../../../services/matches.service';
import {element} from 'protractor';

@Component({
  selector: 'app-find-matches-page',
  templateUrl: './find-matches-page.component.html',
  styleUrls: ['./find-matches-page.component.css']
})
export class FindMatchesPageComponent implements AfterViewInit {
  elements;
  displayedColumns = ['name', 'zip_code', 'state', 'hours', 'num_vols', 'issues'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor(private matchService: MatchesService, private router: Router) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getElementData() {
    this.matchService.getPotentialMatches()
      .subscribe((data: any[]) => this.elements =
        data.map(elements =>
          [elements.first_name + ' ' + elements.last_name, elements.zip_code, elements.state, elements.num_vols, elements.hrs_per_week]));
    console.log(this.elements);
  }
}

export interface Element {
  name: string;
  zip_code: string;
  state: string;
  issues: string;
  num_vols: number;
  hours: number;
}

const ELEMENT_DATA: Element[] = [
  {name: 'Hilary Clinton', zip_code: '02339', state: 'MA', issues: 'Education, LGBT Rights', num_vols: 100, hours: 15},
  {name: 'Jeb Bush', zip_code: '02339', state: 'MA', issues: 'Tax Reform, Infrastructure', num_vols: 50, hours: 20},
  {name: 'Bernie Sanders', zip_code: '02339', state: 'MA', issues: 'Education, Jobs and the Economy', num_vols: 200, hours: 10},
  {name: 'Donal Trump', zip_code: '02339', state: 'MA', issues: 'Tax Reform, Immigration', num_vols: 50, hours: 15}
];
