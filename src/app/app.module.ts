import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LSportsModule } from './lsports-module/lsports-module.module';
import { FixtureLsportsBasedComponent } from './components/fixture-lsports-based/fixture-lsports-based.component';

@NgModule({
  declarations: [AppComponent, TopHeaderComponent, FixtureLsportsBasedComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LSportsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
