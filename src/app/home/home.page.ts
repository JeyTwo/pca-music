import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';

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
    private musicService: MusicService,
    private modalController: ModalController) {}

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

  async showSongs(artists: any){
    console.log(artists)
    const songs = await this.musicService.getArtistTracks(artists.id);
    const modal = await this.modalController.create(
      {
        component: SongModalPage,
        componentProps: {
          name: artists.name,
          id: artists.id
        }
      }
    );
    modal.present();
  }

}
