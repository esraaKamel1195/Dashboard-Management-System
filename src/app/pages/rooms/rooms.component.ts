import { Component } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';
import { Room } from '../../../process/models/room.model';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  rooms: Array<Room> = [];
  labels: Array<string> = [
    'Name',
    'Allowed Number',
    'Usage',
    'Code',
    'Added By',
    'Actions',
  ];
}
