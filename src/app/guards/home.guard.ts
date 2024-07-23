import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class HomeGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  async canActivate() {
    const home = await this.storage.get("isUserLoggedIn")
    if(home){
      return true;
    }else {
      this.router.navigateByUrl('/login')
      return false;
    }
  }
};