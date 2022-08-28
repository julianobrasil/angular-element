import { enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

(async () => {
  const app = await createApplication();
  const component = createCustomElement(AppComponent, {
    injector: app.injector
  })

  customElements.define('form-name', component);
})()
