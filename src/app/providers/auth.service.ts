import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

const TOKEN_KEY = 'user-access-token-key';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  authState = new BehaviorSubject(null);
  constructor(private storage: Storage, private router: Router) {
    this.loadUser();
    this.user = this.authState.asObservable().pipe(
      filter(response => response) //this will return only nu 
    );
  }
  // load data initially when user refreshes the page
  loadUser(){ 
    this.storage.get('TOKEN_KEY').then( data => {
      if(data && data.email && data.role) {
        this.authState.next(data);
      } else {
        this.authState.next( { email: null, role: null});
      }
    });
  }

  signIn(credentials): Observable<any> {
    const email = credentials.email;
    const pwd = credentials.pwd;
    let user = null;
    if (email === 'admin@pcps.org' && pwd === 'password') {
      user = { email, role: 'ADMIN' };
    } else if (email === 'user@pcps.org' && pwd === 'password') {
      user = { email, role: 'USER' };
    }

    this.authState.next(user);
    this.storage.set(TOKEN_KEY, user);
    return of(user);
  }

  async signOut() {
    await this.storage.set(TOKEN_KEY, null);
    this.authState.next(null);
    this.router.navigateUrl('/login');
  }

}
