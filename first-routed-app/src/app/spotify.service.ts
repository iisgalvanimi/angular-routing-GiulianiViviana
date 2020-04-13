
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
        'Bearer BQCRNmwHU1naSzPSKtg2EJb93dN-hw6237GSSokHHJm9PkOiOlfVxknEBQEqxVd5NmJHp_90BG7pbiu8TWR8Cr-Oi1gFsGZjajx9heF1mcj3EqHHyaPFpQ9TdA-Dyn6rCJv8nev1kInrMsSiFavGNYjupl-xq1lsSUo'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }


 getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCRNmwHU1naSzPSKtg2EJb93dN-hw6237GSSokHHJm9PkOiOlfVxknEBQEqxVd5NmJHp_90BG7pbiu8TWR8Cr-Oi1gFsGZjajx9heF1mcj3EqHHyaPFpQ9TdA-Dyn6rCJv8nev1kInrMsSiFavGNYjupl-xq1lsSUo'
    });

    return this.http.get(url, { headers });
  }

  getAlbum(id: string) {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCRNmwHU1naSzPSKtg2EJb93dN-hw6237GSSokHHJm9PkOiOlfVxknEBQEqxVd5NmJHp_90BG7pbiu8TWR8Cr-Oi1gFsGZjajx9heF1mcj3EqHHyaPFpQ9TdA-Dyn6rCJv8nev1kInrMsSiFavGNYjupl-xq1lsSUo'
    });

    return this.http.get(url, { headers });
  }



}
