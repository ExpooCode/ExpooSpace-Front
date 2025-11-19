import { Routes } from '@angular/router';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
//import { LoginComponent } from './components/pages/login/login.component';
//import { RegisterComponent } from './components/pages/register/register.component';
//import { ProfileComponent } from './components/pages/profile/profile.component';
//import { ReportesComponent } from './components/pages/reportes/reportes.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
 // { path: 'login', component: LoginComponent },
 // { path: 'register', component: RegisterComponent },
 // { path: 'profile', component: ProfileComponent },
  //{ path: 'reportes', component: ReportesComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
