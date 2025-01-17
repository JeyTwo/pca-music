import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  urlServer = "https://music.fly.dev"
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"})}

  constructor(
    private http: HttpClient
  ) { }

  getArtistsJson(){
    return dataArtists;
  }
  
  getArtists(){
    //Maneja con HttpClient de extraer la informacion
    //return this.http.get(`${this.urlServer}/artists`, this.httpHeaders)

    // Metodo con Fetch de extraer la informacion
    return fetch(`${this.urlServer}/artists`).then(
      response => response.json()
    )
  }

  getArtistTracks(artist_id:number){
    return fetch(`${this.urlServer}/tracks/artist/${artist_id}`).then(
      response => response.json()
    )
  }
}
