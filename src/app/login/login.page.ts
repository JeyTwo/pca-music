import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.email
          //Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.+$")
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
  }

}
