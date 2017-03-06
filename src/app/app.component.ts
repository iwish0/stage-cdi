import { Component } from '@angular/core';
import {AuthService} from './login/auth.service';
import{WebStorageService} from './web-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
	constructor(public authservice:AuthService,public webstorage:WebStorageService){
		console.log(this.webstorage.isLoggedIn+ "from app.component");
	}

	logout(){
		this.authservice.logout();
	}
  
  	title = 'app works!';
}
