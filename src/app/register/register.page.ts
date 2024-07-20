import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages ={
    email:[
      {type: "required", message: "El email es obligatorio"},
      {type: "email", message: "Correo invalido"}
    ],
    password:[
      {type: "required", message: "Password es obligatorio"}
    ],
    name:[
      {type: "required", message: "Nombre requerido"}
    ],
    last_name:[
      {type: "required", message: "Apellido requerido"}
    ]
  }

  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenticateService, 
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage,
    private router: Router

  ) {
    this.registerForm = this.formBuilder.group({

      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      )
    })
  }

  login(){
    this.router.navigateByUrl("/login")
  }

  ngOnInit() {
  }

  async presentAlert(mss: string) {
    const alert = await this.alertController.create({
      header: 'Se ha registrado con exito!',
      subHeader: 'Inicie sesión',
      message: mss,
      buttons: ['OK'],
    });

    await alert.present();
  }
  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }

  register(registerData: any){
    //console.log(registerData);
    this.storage.set("user", registerData);
    this.presentAlert(this.errorMessage)
    this.authService.registerUser(registerData).then( res => {
      this.navCtrl.navigateBack("/login");
    })
  }

}
