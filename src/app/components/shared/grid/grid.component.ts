import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AgGridModule} from "ag-grid-angular";
import {ColDef, GridOptions, SideBarDef} from "ag-grid-community";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    AgGridModule
  ],
  template: `
    <ag-grid-angular
      (gridReady)="onGridReady($event)"
      (firstDataRendered)="onFirstDataRendered($event)"
      (selectionChanged)="onSelectionChanged($event)"
      [animateRows]="true"
      [columnDefs]="columnDefs"
      [masterDetail]="masterDetail"
      [detailRowAutoHeight]="true"
      [defaultColDef]="defaultColumnDef"
      [domLayout]="'normal'"
      [rowData]="rowData"
      [overlayNoRowsTemplate]="noRowsTemplate"
      [pagination]="true"
      [paginationPageSize]="25"
      [sideBar]="sideBar"
      [gridOptions]="gridOptions"
      [enableCharts]="enableCharts"
      [chartThemes]="chartThemes"
      class="grid-result">
    </ag-grid-angular>
  `,
  styleUrl: './grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent<T = any> {

  @Input() rowData!: T[] | null;
  @Input() columnDefs!: ColDef[];
  @Input() gridOptions: GridOptions = {};
  @Input() sideBar: SideBarDef | undefined = {
    toolPanels: ['columns', 'filters'],
  };
  @Input() noRowsTemplate!: string | undefined;
  @Input() defaultColumnDef: ColDef<any, any> = {
    flex: 1,
    resizable: true,
    filter: true,
    floatingFilter: true,
    sortable: true,
    suppressColumnsToolPanel: false,
    enableRowGroup: true,
  };
  @Input() enableCharts: boolean = true;
  @Input() chartThemes!: string[];
  @Input() masterDetail: boolean = true;

  // TODO: Add example
  // @Input() detailCellRenderer: Component = DetailCellRendererComponent;
  // [detailCellRenderer]="detailCellRenderer"

  @Output() gridReady: EventEmitter<any> = new EventEmitter<any>();
  @Output() firstDataRendered: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter<any>();

  onGridReady($event: any) {
    this.gridReady.emit($event);
  }

  onFirstDataRendered($event: any) {
    this.firstDataRendered.emit($event);
  }

  onSelectionChanged($event: any) {
    this.selectionChanged.emit($event);
  }

}
