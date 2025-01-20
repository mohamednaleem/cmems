import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { InterrogatorsMockData } from '../../services/mock-json';
import { ActivatedRoute, Router } from '@angular/router';
import { CellClickedEvent } from 'ag-grid-community';
import { TablesComponent } from 'projects/libs/common-ui/src/lib/tables/tables.component';
import { SubMenuComponent } from 'projects/libs/common-ui/src/lib/sub-menu/sub-menu.component';
import { InterrogatorsGetResponse, InterrogatorsTableData, Menus } from '../../models/interrogators.model';
import { InterrogatorsService } from '../../services/interrogators.service';
import { SubHeaderComponent } from 'projects/libs/common-ui/src/lib/sub-header/sub-header.component';

@Component({
  selector: 'app-interrogators',
  standalone: true,
  imports: [CommonModule, AgGridModule, TablesComponent, SubHeaderComponent, SubMenuComponent],
  templateUrl: './interrogators.component.html',
  styleUrl: './interrogators.component.scss',
})
export class InterrogatorsComponent implements OnInit {
  title = 'Interrogators';
  rowData: InterrogatorsTableData[] | null = [];
  navTitle = 'Back';
  filter!: string;
  filteredInterrogators: InterrogatorsTableData[] | null = [];

  menuItems: Menus[] = [
    { label: 'All', link: '', filterLink: 'all' },
    { label: 'Active', link: '', filterLink: 'active' },
    { label: 'Unclaimed', link: '', filterLink: 'unclaimed' },
    { label: 'Broken', link: '', filterLink: 'broken' },
    { label: 'Returned', link: '', filterLink: 'returned' },
    { label: 'Retired', link: '', filterLink: 'retired' },
  ];
  constructor(
    private zone: NgZone,
    private router: Router,
    private interrogatorsService: InterrogatorsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.interrogatorsService.getInterrogators(1, 0, 10).subscribe((res: InterrogatorsGetResponse) => {
      this.rowData = res?.data;
      console.log('res', res);
      console.log('this.rowData', this.rowData);
      this.route.queryParams.subscribe(params => {
        this.filter = params['filter'];
        this.applyFilter(this.filter);
      });
    });
    this.route.queryParams.subscribe(params => {
      this.filter = params['filter'];
      this.applyFilter(this.filter);
    });
  }

  handlePatientClick(event: CellClickedEvent) {
    this.zone.run(() => {
      if (event && event.data) {
        this.rowData = event.data;
        this.navigateToDetail(event.data);
      }
    });
  }

  applyFilter(filter: string): void {
    if (filter) {
      console.log('filter', filter);
      this.filteredInterrogators = this.rowData
        ? this.rowData.filter(interrogator => interrogator.state.toLowerCase() === filter)
        : [];
    } else {
      this.filteredInterrogators = this.rowData;
    }
  }

  navigateToDetail(data: any): void {
    this.router.navigate(['interrogators', data.DT_RowId], { state: { data } });
  }
}
