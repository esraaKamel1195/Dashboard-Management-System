import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';
import { Faculty } from '../../../process/models/faculty.model';
import { FacultiesService } from './faculties.service';

@Component({
  selector: 'app-faculties',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './faculties.component.html',
  styleUrl: './faculties.component.scss'
})
export class FacultiesComponent implements OnInit {
  fuculties: Array<Faculty> = [];
  labels: Array<string> = [
    'Name',
    'Num. Of Clients',
    'Num. Of Graduated',
    'Num Of Ungraduated',
    'Actions',
  ];

  constructor(
    private facultiesService: FacultiesService
  ) {
  }

  ngOnInit(): void {
    this.facultiesService.getList().subscribe({
      next: (value) => {
        console.log(value);
        this.fuculties = value;
      },
    })
  }
}
