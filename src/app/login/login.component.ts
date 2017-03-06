import { Component }   from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
import {WebStorageService} from "../web-storage.service";
@Component({
  templateUrl:'./login.component.html'
})
export class LoginComponent {
  message: string;
  constructor(public authService: AuthService,public webstorage:WebStorageService, public router: Router) {
    // this.setMessage();
  }
  // setMessage() {
  //   this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  // }
  // login() {
  //   this.message = 'Trying to log in ...';
  //   this.authService.login().subscribe(() => {
  //     this.setMessage();
  //     if (this.authService.isLoggedIn) {
  //       // Get the redirect URL from our auth service
  //       // If no redirect has been set, use the default
  //       let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
  //       // Redirect the user
  //       this.router.navigate([redirect]);
  //     }
  //   });
  // }
  login(form:NgForm){

    // this.authService.login(form);
    if(this.authService.login(form)){
       this.router.navigate(['/home']);
       // console.log("Redirection!");
    }else{

     console.log("L'identifiant ou le mot de passe sont incorrectes.")
  }
}

}