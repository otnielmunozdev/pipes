import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { capitalizadoPipe } from './pipes/capitalizado.pipe';

 
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomseguroPipePipe } from './pipes/domseguro-pipe.pipe';
import { ContrasenaPipePipe } from './pipes/contrasena-pipe.pipe';
registerLocaleData(localeEs);
 

@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe,
    DomseguroPipePipe,
    ContrasenaPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


