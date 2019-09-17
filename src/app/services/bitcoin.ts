import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Bitcoin } from '../models/bitcoin.model';
import { Bitcoinhist } from '../models/bitcoinhist.model';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

@Injectable({
    providedIn: 'root'
})

export class BitcoinService {

    apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    historicUrl = 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=1567900800000&end=1568571538370';

    constructor(private http: HttpClient) {

    console.log(this.http.get(`${this.apiUrl}`));

    }

    getPrice(): Observable<Bitcoin> {

        return this.http.get<Bitcoin>(`${this.apiUrl}`);

    }

    getPriceHistory(): Observable<Bitcoinhist> {

        return this.http.get<Bitcoinhist>(`${this.historicUrl}`);

    }
}
