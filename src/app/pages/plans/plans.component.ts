import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';
import { Plan } from '../../../process/models/plan.model';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent implements OnInit {
  plans: Array<Plan> = [];
  labels: Array<string> = [
    'Name',
    'Price',
    'Num Of Days',
    'Code',
    'Discount',
    'Limited Period',
    'Actions',
  ];

  ngOnInit(): void {
    
  }
}
