import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class MenuGuard implements CanActivate {
  constructor(
    private storage: Storage, 
    private router: Router
  ) {}

  async canActivate() {
    const menu = await this.storage.get("isUserLoggedIn")
    if(menu){
      return true;
    }else {
      this.router.navigateByUrl('/login')
      return false;
    }
  }
};