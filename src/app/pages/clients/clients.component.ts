import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../shared/table/table.component';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {
  clients: Array<any> = [];
  labels: Array<string> = [
    'Name',
    "Id",
    'StudyAt',
    'Mobile',
    'Email',
    'Graduated',
    'AddedBy',
    'Actions',
  ];

  constructor(
    private clientService: ClientsService
  ) {
  }

  ngOnInit(): void {
    this.clientService.getList().subscribe({
      next: (value) => {
        console.log(value);
        this.clients = value;
      },
    })
  }
}
