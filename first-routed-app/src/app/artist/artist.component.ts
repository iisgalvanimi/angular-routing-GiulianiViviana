import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  routeObs: Observable<ParamMap>;
  artist : any;
  spotifyServiceObs: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SpotifyService,
    private location: Location ) { }


  ngOnInit(): void {

    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }


 //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let artistId = params.get('id'); //Ottengo l'id dai parametri
    console.log (artistId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getArtist(artistId) ;
    this.spotifyServiceObs.subscribe((data)=>this.artist = data)
  }

  back() : void
  {
    this.location.back();
  }


}
