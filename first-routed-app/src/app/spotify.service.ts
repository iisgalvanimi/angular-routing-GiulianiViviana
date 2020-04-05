
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
        'Bearer BQCB3dvE0fmG3GM7kuY0gsBNu8N8ciGAt3Y1dTcyvMu5aQTbFQd4QzdoCZn8zXDR0Je3uRyvoD3TUVlC7EdJJaoWgfIo5ZcgMbNmfK5AlGQ4f1w2jMjFmHQz0X1-3ui5nUi8PSW1cWwEMfNwjtoDdaVeMGS_KzH4Fyk"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
