import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockedDataService} from './mocked-data.service';
import {StickerService} from './sticker.service';
import {ConversionService} from './conversion.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StickersComponent} from './stickers/stickers.component';
import {AddNewFormComponent} from './addNewForm/addNewForm.component';

@NgModule({
  declarations: [
    AppComponent,
    StickersComponent,
    AddNewFormComponent
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
  providers: [StickerService, ConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
