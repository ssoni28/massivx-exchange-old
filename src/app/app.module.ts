import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiTestComponent } from './components/api-test/api-test.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import {TestapiService} from './services/testapi.service.client';
import {UserService} from './services/user.service.client';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { TestComponent } from './components/test/test.component';
import {TestService} from './services/test.service.client';
import {SharedService} from './services/shared.service.client';

@NgModule({
  declarations: [
    AppComponent,
    ApiTestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [TestapiService, UserService, TestService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
