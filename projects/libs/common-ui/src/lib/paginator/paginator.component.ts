import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'lib-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent implements AfterViewInit {
  @Input() agGrid!: AgGridAngular;
  @Input() totalRecords!: number;
  @Input() pageSize!: number;
  @Input() pageSizeOptions!: number[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    if (this.agGrid) {
      this.agGrid.api?.addEventListener('filterChanged', () => {
        this.resetPaginator();
      });
    }
  }

  onPageChange($event: PageEvent): void {
    const currentPage = $event.pageIndex;
    const newPageSize = $event.pageSize;
    this.agGrid.api.paginationGoToPage(currentPage);
    this.agGrid.api.setGridOption('paginationPageSize', newPageSize);
  }

  resetPaginator(): void {
    this.paginator.pageIndex = 0;
  }
}
