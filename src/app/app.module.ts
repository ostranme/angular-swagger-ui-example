import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwaggerUiComponent } from './swagger-ui/swagger-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    SwaggerUiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
