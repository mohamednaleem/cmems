export interface Menus {
  label: string;
  link: string;
  filterLink?: string;
}

export interface InterrogatorsGetResponse {
  recordsTotal: number;
  recordsFiltered: number;
  data: InterrogatorsTableData[];
}

export interface InterrogatorsTableData {
  serial: string;
  state: string;
  model_number: string;
  current_version: string;
  expected_version: string;
  DT_RowId: string;
}
