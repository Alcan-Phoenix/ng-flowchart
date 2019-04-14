import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as $ from 'jquery'; window["$"] = $; window["jQuery"] = $;
// import "froala-editor/js/froala_editor.pkgd.min.js";
import "src/lib/jquery-ui/jquery-ui-1.12.1.custom/jquery-ui.min.js";
import "src/lib/jquery.panzoom/3.2.2/jquery.panzoom.js";
import "src/lib/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
import "src/lib/flowchart-lib/jquery.flowchart.js";
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
