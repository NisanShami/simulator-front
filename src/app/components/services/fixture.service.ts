import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/fixture.model';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Photo[]>{
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
