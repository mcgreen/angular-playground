import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {provideServiceWorker, ServiceWorkerModule} from "@angular/service-worker";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(BrowserModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:3000'
  })), provideServiceWorker('ngsw-worker.js', {
    enabled: !isDevMode(),
    registrationStrategy: 'registerWhenStable:30000'
  })]
};
