import { Component } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';

@Component({
  selector: 'app-room-registers',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './room-registers.component.html',
  styleUrl: './room-registers.component.scss'
})
export class RoomRegistersComponent {
  // registers: Array<any> = [];
  // labels: Array<string> = [
  //   'Name',
  //   'Start',
  //   'End',
  //   'Cost',
  //   'Catering',
  //   'Plan Discount',
  //   'Copy',
  //   'Total',
  //   'Actions',
  // ];
}
