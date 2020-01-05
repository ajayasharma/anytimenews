import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    pwd: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.auth.signIn(this.user).subscribe(user => {
      console.log('after login: ', user);
      const role = user.role;
      if (role === 'ADMIN') {
        console.log('Admin has logged in');
        this.router.navigateByUrl('/home');
      } else if (role === 'USER') {
        console.log('User has logged in');
        this.router.navigateByUrl('/publishers');
      }
    });
  }

}
