import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomRegistersService {
  private backend_url: string = environment.backend_url;

  constructor(
    private httpClient: HttpClient
  ) { }
}
