import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatchesService} from '../../../../matches/services/matches.service';

export interface Element {
  id: number;
  name: string;
  zip_code: string;
  state: string;
  issues: string;
  link: string;
  num_vols: number;
  party: string;
}

@Component({
  selector: 'app-find-matches-form',
  templateUrl: './find-matches-form.component.html',
  styleUrls: ['./find-matches-form.component.css']
})

export class FindMatchesFormComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'party', 'zip_code', 'state', 'num_vols', 'link', 'interested'];
  dataSource: MatTableDataSource<Element>;
  constructor(private matchService: MatchesService) {}
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
            party: match.party
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

