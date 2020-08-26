import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiService {
  HASH = 'e2b3294124ccaaa68115c8106dc86a30';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters?apikey=4cfbc0394172c4116c3a1d3a720ee830&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
