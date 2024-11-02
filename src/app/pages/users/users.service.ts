import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private backend_url: string = environment.backend_url;

  constructor(private httpClient: HttpClient) {}
  getList(): Observable<any> {
    return this.httpClient.get<{ status: number; message: string; data: any }>(
      `${this.backend_url}/users/`
    );
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get<{ status: number; message: string; data: any }>(
      `${this.backend_url}/users/${id}`
    );
  }

  add(data: any): Observable<any> {
    return this.httpClient.post<{ status: number; message: string; data: any }>(
      `${this.backend_url}/users/`,
      data
    );
  }

  edit(data: any): Observable<any> {
    return this.httpClient.put<{ status: number; message: string; data: any }>(
      `${this.backend_url}/users/${data.id}`,
      data
    );
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete<{
      status: number;
      message: string;
      data: any;
    }>(`${this.backend_url}/users/${id}`);
  }
}
