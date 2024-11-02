import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environment/environment';
import { RegisteredUser } from '../../../process/models/register-user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistersService {
  private backend_url: string = environment.backend_url;

  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
    return this.httpClient
      .get<{ data: Array<RegisteredUser> }>(`${this.backend_url}/registerations/`)
      .pipe(
        catchError((error) => {
          return throwError(() => console.log(error));
        })
      );
  }

  getById(id: any): Observable<any> {
    return this.httpClient.get<{ status: number; message: string; data: any }>(
      `${this.backend_url}/registerations/${id}`
    );
  }

  add(data: any): Observable<any> {
    return this.httpClient.post<{ status: number; message: string; data: any }>(
      `${this.backend_url}/registerations/`,
      data
    );
  }

  edit(data: any): Observable<any> {
    return this.httpClient.put<{ status: number; message: string; data: any }>(
      `${this.backend_url}/registerations/${data.id}`,
      data
    );
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete<{
      status: number;
      message: string;
      data: any;
    }>(`${this.backend_url}/registerations/${id}`);
  }
}
