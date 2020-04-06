
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBa-BbByJIS2ryO26pkn0WZFRSwbPrGy0l2Bauz7OBP0coHKCW40OXSqev-0u4komUbFNPJ3h9Bkis0MV9rYJqImQuNmExRHNgjIWR-dj83ZjlioEUVnGqL9oYvgubUUUS-F_kuwhEhuRqQP7uOEhpuZiFsn_mFPaw'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
