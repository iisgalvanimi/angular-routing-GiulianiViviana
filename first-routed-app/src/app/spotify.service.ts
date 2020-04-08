
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
        'Bearer BQBkqYWu9dmYFMyZwQvhIoRmptwv1hQ9kyNjmNdTwaI4SzasPV_k--BSZzsOElPPna5UKBY23geeEP_XZPn7NiTQiIQ0QQ2kPROZd1yujWFVfiO7I8eGT62KRN2_RhVPSypbZb5MsrBUBwvuRe6amaAlxvKJCLiLpIc'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }


 getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBkqYWu9dmYFMyZwQvhIoRmptwv1hQ9kyNjmNdTwaI4SzasPV_k--BSZzsOElPPna5UKBY23geeEP_XZPn7NiTQiIQ0QQ2kPROZd1yujWFVfiO7I8eGT62KRN2_RhVPSypbZb5MsrBUBwvuRe6amaAlxvKJCLiLpIc'
    });

    return this.http.get(url, { headers });
  }



}
