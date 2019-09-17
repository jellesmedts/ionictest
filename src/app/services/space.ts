import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Space } from '../models/space.model';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

@Injectable({
    providedIn: 'root'
})

export class SpaceService {

    apiUrl = 'https://spaceflightnewsapi.net/api/v1/articles';

    constructor(private http: HttpClient) {

    console.log(this.http.get(`${this.apiUrl}`));

    }

    getNews(): Observable<Space> {

        return this.http.get<Space>(`${this.apiUrl}`);

    }
}
