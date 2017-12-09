import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
