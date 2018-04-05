import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './core/pages/AppComponent';
import { SharedModule } from './shared/SharedModule';
import { MdbModule } from './mdb/MdbModule';
import { AppRoutingModule } from './AppRoutingModule';

import { NotFoundPage } from './core/pages/NotFoundPage';
import { PreferenceStore } from './core/services/PreferenceStore';
import { YamcsService } from './core/services/YamcsService';
import { HomePage } from './core/pages/HomePage';
import { ProfilePage } from './core/pages/ProfilePage';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NotFoundPage,
    ProfilePage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule, // Keep in front of modules that contribute child routing
    SharedModule,
    MdbModule,
  ],
  providers: [
    PreferenceStore,
    YamcsService,
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
