import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostcardComponent } from './shared/components/postcard/postcard.component';
import { MobileComponent } from './shared/components/mobile/mobile.component';
import { MoviemodelComponent } from './shared/components/moviemodel/moviemodel.component';

@NgModule({
  declarations: [
    AppComponent,
    PostcardComponent,
    MobileComponent,
    MoviemodelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
