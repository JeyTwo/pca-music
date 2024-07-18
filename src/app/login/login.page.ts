import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email:[
      {type: "required", message: "El email es obligatorio"},
      {type: "pattern", message: "Email invalido"}
    ],
    passkey:[
      {type: "required", message:"Password invalido"}
    ]
  }

  constructor(private formBuilder: FormBuilder, private authSerice: AuthenticateService, private navCtrl: NavController) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          //Validators.email,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9.]+$")
        ])
      ),
      passkey: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      )
    })
  }

  ngOnInit() {
  }

  loginUser(dataLogin: any){
    console.log(dataLogin)
    this.authSerice.loginUser(dataLogin).then(res => {
      this.navCtrl.navigateForward("/home")
    })
  }

}
