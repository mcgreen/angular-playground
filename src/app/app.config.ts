import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideServiceWorker} from "@angular/service-worker";
import {ReactiveFormsModule} from "@angular/forms";

// TODO: providing interceptors
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(ReactiveFormsModule), provideHttpClient(), provideServiceWorker('ngsw-worker.js', {
    enabled: !isDevMode(),
    registrationStrategy: 'registerWhenStable:30000'
  })]
};
