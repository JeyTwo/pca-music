import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  artistsJson: any;
  artists: any;

  //slideOps = {
  //  initialSlide: 2,
  //  slidesPerView: 4,
  //  canteredSlides: true,
  //  speed: 400
  //}

  constructor(
    private router: Router,
    private musicService: MusicService) {}

  intro(){
    this.router.navigateByUrl("/intro")
  }

  ngOnInit() {
    this.artistsJson = this.musicService.getArtistsJson().artists;
    console.log("Json", this.artistsJson)

    // Manera con HttpClient de extraer la informacion
    //this.musicService.getArtists().subscribe((data:any) =>{
    //  this.artists = data
    //  console.log("Servidor", this.artists)
    //})
    
    // Manera con Fetch de extraer la informacion
    this.musicService.getArtists().then(data =>{
      this.artists = data;
      console.log(data)
    })
  }

}
