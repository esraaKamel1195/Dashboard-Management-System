import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';
import { CateringCalcService } from './catering-calc.service';

@Component({
  selector: 'app-client-catering',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './client-catering.component.html',
  styleUrl: './client-catering.component.scss'
})
export class ClientCateringComponent implements OnInit{
  cateringCalcs: Array<any> = [];
  labels: Array<string> = [
    'Client',
    'Product',
    'Price',
    'Quantity',
    'Total',
    'Actions',
  ];

  constructor(
    private cateringCalcService: CateringCalcService
  ) {
  }

  ngOnInit(): void {
    this.cateringCalcService.getList().subscribe({
      next: (value) => {
        console.log(value);
        this.cateringCalcs = value;
      },
    })
  }
}
