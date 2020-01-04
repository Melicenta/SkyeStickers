import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockedDataService} from './mocked-data.service';
import {StickerService} from './sticker.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StickersComponent} from './stickers/stickers.component';

@NgModule({
  declarations: [
    AppComponent,
    StickersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      MockedDataService, { dataEncapsulation: false }
    )
  ],
  providers: [StickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
