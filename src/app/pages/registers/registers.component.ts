import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';
import { RegisteredUser } from '../../../process/models/register-user.model';
import { RegistersService } from './registers.service';

@Component({
  selector: 'app-registers',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.scss'
})
export class RegistersComponent implements OnInit {
  registers: Array<RegisteredUser> = [];
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

  constructor(private registerService :RegistersService) {}

  ngOnInit(): void {
    
  }
}
