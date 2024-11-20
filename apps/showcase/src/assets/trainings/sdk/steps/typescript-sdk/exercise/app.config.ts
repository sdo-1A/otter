import { ApiFetchClient } from '@ama-sdk/client-fetch';
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { prefersReducedMotion } from '@o3r/application';
import { PetApi } from '../../../../libs/sdk/src/api';
import { routes } from './app.routes';


function petApiFactory() {
  /* Create an ApiFetchClient and return a PetApi object */
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule.withConfig({disableAnimations: prefersReducedMotion()})),
    {provide: PetApi, useFactory: petApiFactory}
  ]
};
