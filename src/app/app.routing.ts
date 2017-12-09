import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './components/user/profile/profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: RegisterComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
