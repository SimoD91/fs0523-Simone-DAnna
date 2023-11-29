import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActiveComponent } from './pages/active/active.component';
import { InactiveComponent } from './pages/inactive/inactive.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActiveComponent,
    InactiveComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
