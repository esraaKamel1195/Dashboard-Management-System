import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../shared/table/table.component';
import { Product } from '../../../process/models/product.model';
import { CateringService } from './catering.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-catering',
  standalone: true,
  imports: [ CommonModule, NzTableModule, TableComponent, NzDividerModule],
  templateUrl: './catering.component.html',
  styleUrl: './catering.component.scss'
})
export class CateringComponent implements OnInit{
  catering: Array<Product> = [];
  labels: Array<string> = [
    'Name',
    'Price',
    'Actions'
  ];

  constructor(
    private cateringService: CateringService
  ) {}

  ngOnInit(): void {
    this.cateringService.getList().subscribe({
      next: (value) => {
        console.log(value);
        this.catering = value;
      },
    });
  }
}
