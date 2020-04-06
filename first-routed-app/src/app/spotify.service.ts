
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
        'Bearer BQAxV0H55cxP1HrjRXwXfHts8x3JKprHVYtTmvBZseB8fumY8I-s2u3txqYuFy9eaeNLKs13hOSdI2PRZ4QZnRq_s_q3LAM1KQyRdXtQewKP4i33OBkfzKbzinxZng5WyYVfQ3VU3rNXM1wZPcapT-zLcDIFOP9pYEY"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
