import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzDividerModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() dataSet: Array<any> = [];
  @Input() labels: Array<string> = [];
}
