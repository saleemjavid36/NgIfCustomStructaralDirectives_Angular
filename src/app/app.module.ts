import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomIfComponent } from './custom-if/custom-if.component';

import { CustomShowHideDirectiveDirective } from './custom-show-hide-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomIfComponent,
    CustomShowHideDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
