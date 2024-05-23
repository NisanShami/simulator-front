import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FixtureService {
  private filtersAsQueryStringObject = new Subject<string>();
  readonly filtersAsQueryString$ =
    this.filtersAsQueryStringObject.asObservable();

  constructor(private http: HttpClient) {}

  getAllData(entity: string, params?: string): Observable<any[]> {
    const url =
      `http://localhost:50000/${entity}` + (params ? `/search?${params}` : '');
    return this.http.get<any[]>(url);
  }

  setFiltersQueryString(queryString: string) {
    this.filtersAsQueryStringObject.next(queryString);
  }
}
