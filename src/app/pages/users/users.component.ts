import { Component } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';
import { User } from '../../../process/models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: Array<User> = [];
  labels: Array<string> = [
    'Name',
    'Start',
    'End',
    'Cost',
    'Catering',
    'Plan Discount',
    'Copy',
    'Total',
    'Actions',
  ];
}
