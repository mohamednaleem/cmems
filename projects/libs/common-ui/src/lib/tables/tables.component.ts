import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CellClickedEvent,
  ColDef,
  GridApi,
  GridOptions,
  RowHeightParams,
} from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'lib-tables',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent implements OnInit {
  @Input() rowData: any[] | null = [];
  @Output() outEmittedClick = new EventEmitter<CellClickedEvent>();
  gridApi!: GridApi;

  columnDefs: ColDef[] = [];
  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: false,
    filter: true,
    wrapHeaderText: true,
    wrapText: true,
    suppressMenu: true,
    suppressMovable: true,
  };

  gridOptions: GridOptions;

  constructor() {
    this.gridOptions = {
      pagination: true,
      paginationPageSize: 20,
      // rowHeight: 50,
      // domLayout: 'autoHeight',
      suppressContextMenu: true,
      paginationPageSizeSelector: [20, 50, 100],
    };
  }

  ngOnInit() {
    if ((this.rowData ?? []).length > 0) {
      console.log('this.rowData', this.rowData);
      this.setColumnDefs();
    }
  }

  setColumnDefs() {
    const keys = Object.keys(this.rowData?.[0]);
    console.log('keys', keys);
    this.columnDefs = keys?.map(key => ({
      field: key,
      flex: 1,
      filter: 'agNumberColumnFilter',
      sortable: true,
      onCellClicked: this.clicked.bind(this),
      cellClass: 'first-column-style',
      cellRenderer: (invNum: any) => `${invNum.value}`,
    }));
  }

  getRowHeight = (params: RowHeightParams): number | undefined => {
    const isDetailRow = params.node.detail;
    if (!isDetailRow) {
      return undefined;
    }
    const detailPanelHeight = params.data.child?.length * 46;
    return detailPanelHeight;
  };

  clicked($event: CellClickedEvent): void {
    this.outEmittedClick.emit($event);
  }
}
