import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (
        credentials.email == "jhon@gmail.com" &&
        credentials.passkey == "1234"
      ){
        accept("Login Correcto")
      }else{
        reject("Login Incorrecto")
      }
    })
  }
}
