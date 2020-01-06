import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from '../providers/auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private router: Router, private auth: AuthService
              , private alertCtrl: AlertController ) { }
  canActivate( route: ActivatedRouteSnapshot) {
    return this.auth.user.pipe(
      take(1),
      map( user => {
        console.log('log', user);
        if(user){

        }else{
          this.showAlert();
          return this.router.parseUrl('/login');
        }
      })
    );
  } 

  async showAlert() {
    let alert = await this.alertCtrl.create({
      header: 'Unauthorized Access',
      message: 'You are not authorized to visit that page',
      buttons: ['OK']
    });
    alert.present();
  }
  
}
