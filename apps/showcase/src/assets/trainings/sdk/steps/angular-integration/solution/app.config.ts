import { ApiFetchClient } from '@ama-sdk/client-fetch';
import { ApiClient, PluginRunner, RequestOptions, RequestPlugin } from '@ama-sdk/core';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ApiManager, ApiManagerModule } from '@o3r/apis-manager';
import { routes } from './app.routes';

class RequestLogPlugin implements RequestPlugin {
  public load(): PluginRunner<RequestOptions, RequestOptions> {
    return {
      transform: (data: RequestOptions) => {
        alert(JSON.stringify(data));
        return data;
      }
    };
  }
}

// Default configuration for all the APIs defined in the ApiManager
const apiConfig: ApiClient = new ApiFetchClient(
  {
    basePath: 'https://petstore3.swagger.io/api/v3',
    requestPlugins: [],
    fetchPlugins: []
  }
);
const apiManager = new ApiManager(apiConfig, {
  // Configuration override for a specific API
  StoreApi: new ApiFetchClient({
    basePath: 'https://petstore3.swagger.io/api/v3',
    requestPlugins: [new RequestLogPlugin()],
    fetchPlugins: []
  })
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(ApiManagerModule.forRoot(apiManager))
  ]
};
