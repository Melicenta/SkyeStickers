import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sticker } from './stickers/sticker.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockedDataService implements InMemoryDbService {
  createDb() {
    const stickers = [
      {id: 1, name: 'FE', content: 'Ля мсье фронтендье'},
      {id: 2, name: 'NoCapacity', content: 'Нет капасити думать'},
      {id: 3, name: 'HomeVideo', content: 'Название нашего хоум видео'},
      {id: 4, name: 'FromAuthors', content: 'От содателей КЛС, ВО и продакт импорта'},
    ];
    return {stickers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (2).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(stickers: Sticker[]): number {
    return stickers.length > 0 ? Math.max(...stickers.map(sticker => sticker.id)) + 1 : 2;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
