
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
        'Bearer BQBz-4rq8fufBf85DYDrysCS3H9xTFoiYcXMGXQM099zpUwYjWJ0FTLYG2dgHSRvdV_nZ1IjEP3Zj9TipJeAEezm_pTGaisrkZgZKn63vNy0y7rSsmD5OaeFttD7baeyHOAezNuY7fO7qZVfJuo7G77EFUn5FOM4AgI"'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
