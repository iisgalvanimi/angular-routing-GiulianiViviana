
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders({Authorization: environment.oauthToken});

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
        'Bearer BQB5bb3eQ9FdvxZEwuwUw2g7OEQUlbTshV3LWpo_UO2aSP7tTtieQAy-MGaYSMwCSrHwwcVyBG87pSQ-Mjz21L76hEQMZ1D1noQnh3hwPPyKAKXokt7FWpLf_BTw4N524_vvYJJeYqg6ochf7cKJubc6qDOxdcqf0oU'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }


 getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB5bb3eQ9FdvxZEwuwUw2g7OEQUlbTshV3LWpo_UO2aSP7tTtieQAy-MGaYSMwCSrHwwcVyBG87pSQ-Mjz21L76hEQMZ1D1noQnh3hwPPyKAKXokt7FWpLf_BTw4N524_vvYJJeYqg6ochf7cKJubc6qDOxdcqf0oU'
    });

    return this.http.get(url, { headers });
  }

  getAlbum(id: string) {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB5bb3eQ9FdvxZEwuwUw2g7OEQUlbTshV3LWpo_UO2aSP7tTtieQAy-MGaYSMwCSrHwwcVyBG87pSQ-Mjz21L76hEQMZ1D1noQnh3hwPPyKAKXokt7FWpLf_BTw4N524_vvYJJeYqg6ochf7cKJubc6qDOxdcqf0oU'
    });

    return this.http.get(url, { headers });
  }

   getArtist(id: string) {
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB5bb3eQ9FdvxZEwuwUw2g7OEQUlbTshV3LWpo_UO2aSP7tTtieQAy-MGaYSMwCSrHwwcVyBG87pSQ-Mjz21L76hEQMZ1D1noQnh3hwPPyKAKXokt7FWpLf_BTw4N524_vvYJJeYqg6ochf7cKJubc6qDOxdcqf0oU'
    });

    return this.http.get(url, { headers });
  }
}
