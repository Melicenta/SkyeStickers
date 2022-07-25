import { NgModule } from '@angular/core';
import domtoimage from 'dom-to-image';
import {Sticker} from './stickers/sticker.component';

@NgModule({
  providers: [ConversionService]
})
export class ConversionService {
  constructor() {
  }


  convert(sticker: Sticker): void {
    const {id, name, background} = sticker
    const stringId = id.toString(); // Here we go...
    const node = document.getElementById(stringId); // look the other way, please :)

    node.style.setProperty('background','url('+ background +') no-repeat 1% 68%')
    domtoimage.toPng(node).then(dataUrl => {
      const img = new Image();
      img.src = dataUrl;
      img.width = 512;
      const link = document.createElement('a');
      link.download = name + '.png';
      link.href = dataUrl
      link.click();
      // window.open(dataUrl.replace('image/png', 'image/octet-stream'), '_blank');
    }).catch(error => {
      console.error('oops, something went wrong!', error);
    });
  }
}
