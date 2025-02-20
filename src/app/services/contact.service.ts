import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  ContactService {
  private readonly mailApi = 'https://mailthis.to/sewardge@gmail.com'

  constructor(private readonly http: HttpClient) { }

  PostMessage(input: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(this.mailApi, input, { headers: headers, responseType: 'text' })
      .pipe(
        map((response) => response),
        map((error: any) => error)
    )
  }

}
