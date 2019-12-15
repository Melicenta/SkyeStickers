import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StickersComponent} from './stickers/stickers.component';
import {Sticker} from './stickers/sticker.component';


const routes: Routes = [
  { path: '', redirectTo: '/stickers', pathMatch: 'full' },
  { path: 'stickers', component: StickersComponent },
  { path: 'sticker/:id', component: Sticker },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
