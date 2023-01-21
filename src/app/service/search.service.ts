import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public url: string = environment.SERVER_URL;
  public api_key: string = environment.API_KEY;
  public cx_key: string = environment.CX_KEY;
  public server_url: String = environment.SERVER_URL;

  constructor(private httpClient: HttpClient) { }

  getFetchData(searchTearm: string): Observable<any> {
    console.log(searchTearm);
    return this.httpClient.get<any>(`${this.url}`, {
      params: {
        key: this.api_key,
        cx: this.cx_key,
        q: searchTearm
      }
    })
  }
}
