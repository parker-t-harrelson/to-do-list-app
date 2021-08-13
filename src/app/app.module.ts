import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
