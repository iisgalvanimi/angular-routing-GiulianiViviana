
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
        'Bearer BQAj2TmQ7essJ7zP7h9DQkeObH5kh2MPJhXUeRF6NLcrOACSyv6oyvYpsDwcuCZ17JcQf8MAvkxa5dg4g7goi4VjXUoUeNS3gX45Gg-APydf-MtU60zqQYL2hrJWk7fPFPcgSjH2Bh-GtqJt1U7ki1euni0GeSnCsyk'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
