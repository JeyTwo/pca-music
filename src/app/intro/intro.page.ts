import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Titulo de slide 1",
      icon: "diamond-outline",
      avatar: "https://pbs.twimg.com/media/EWSzU-WVcAE2HDW.jpg",
      image: "https://media.slidesgo.com/storage/10149218/conversions/0-music-lesson-thumb.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet rhoncus leo. Etiam aliquam arcu ac dapibus pellentesque. Aenean commodo diam mauris, ac malesuada."
    },
    {
      title: "Titulo de slide 2",
      icon: "diamond-outline",
      avatar: "https://pbs.twimg.com/media/EWSzU-WVcAE2HDW.jpg",
      image: "https://estaticos.elcolombiano.com/binrepository/1200x870/0c121/1200d627/none/11101/AHRM/nostalgia-musica-1_42537840_20230605193530.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet rhoncus leo. Etiam aliquam arcu ac dapibus pellentesque. Aenean commodo diam mauris, ac malesuada."
    },
    {
      title: "Titulo de slide 3",
      icon: "diamond-outline",
      avatar: "https://pbs.twimg.com/media/EWSzU-WVcAE2HDW.jpg",
      image: "https://img.freepik.com/fotos-premium/musica-mente-arte-abstracto-musical-creado-tecnologia-generativa-ia_545448-15311.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet rhoncus leo. Etiam aliquam arcu ac dapibus pellentesque. Aenean commodo diam mauris, ac malesuada."
    },
    {
      title: "Titulo de slide 4 ",
      icon: "diamond-outline",
      avatar: "https://pbs.twimg.com/media/EWSzU-WVcAE2HDW.jpg",
      image: "https://www.elhumanista.net/wp-content/uploads/2021/09/musica.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet rhoncus leo. Etiam aliquam arcu ac dapibus pellentesque. Aenean commodo diam mauris, ac malesuada."
    }
  ]

  constructor(private router: Router, private storage: Storage) { }
  //Cuando se va a cargar la pagina
  ngOnInit() {
  }

  //Cuando ya estoy por entrar a la pagina
  ionViewWillEnter(){

  }

  //Cuando ya entre a la pagina
  ionViewDidEnter(){

  }

  //Cuando se va a dejar la pagina
  ionViewWillLeave(){
    
  }

  login(){
    console.log("Estoy intentando entrar al login")
    this.router.navigateByUrl("/login");
  }
  close(){
    //console.log("Estoy intentando cerrar la intro")
    //this.storage.set("isIntroShowed", true)
    this.router.navigateByUrl("/menu/home")
  }
}
