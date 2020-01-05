import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'user-access-token-key';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  authState = new BehaviorSubject(null);
  constructor(private storage: Storage) {
    this.user = this.authState.asObservable();
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
    
  }

}
