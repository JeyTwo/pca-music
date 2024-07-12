import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      title: "Titulo de slide 1",
      icon: "diamond-outline",
      avatar: "https://pbs.twimg.com/media/EWSzU-WVcAE2HDW.jpg",
      image: "https://media.slidesgo.com/storage/10149218/conversions/0-music-lesson-thumb.jpg",
      description: "Texto de description"
    },
    {
      title: "Titulo de slide 2",
      icon: "diamond-outline",
      avatar: "https://pbs.twimg.com/media/EWSzU-WVcAE2HDW.jpg",
      image: "https://estaticos.elcolombiano.com/binrepository/1200x870/0c121/1200d627/none/11101/AHRM/nostalgia-musica-1_42537840_20230605193530.jpg",
      description: "Texto de description"
    },
    {
      title: "Titulo de slide 3",
      icon: "diamond-outline",
      avatar: "https://pbs.twimg.com/media/EWSzU-WVcAE2HDW.jpg",
      image: "https://img.freepik.com/fotos-premium/musica-mente-arte-abstracto-musical-creado-tecnologia-generativa-ia_545448-15311.jpg",
      description: "Texto de description"
    },
    {
      title: "Titulo de slide 4 ",
      icon: "diamond-outline",
      avatar: "https://pbs.twimg.com/media/EWSzU-WVcAE2HDW.jpg",
      image: "https://www.elhumanista.net/wp-content/uploads/2021/09/musica.jpg",
      description: "Texto de description"
    }
  ]

  constructor() {}

}
