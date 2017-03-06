import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent }   from './login/login.component';
import { HomeComponent }   from './home/home.component';
import{AuthGuard} from './login/auth-guard.service';

//import { PageNotFoundComponent } from './not-found.component';
const appRoutes: Routes = [
 
  { path: 'login',component: LoginComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent,canActivate: [AuthGuard] }
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}