import {Component, OnInit} from '@angular/core';
import {Sticker} from './sticker.component';
import {StickerService} from '../sticker.service';
import {ConversionService} from '../conversion.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.scss']
})
export class StickersComponent implements OnInit {
  newStickers: Sticker[];

  constructor(private stickerService: StickerService,
              private conversionService: ConversionService) { }

  ngOnInit() {
    this.getStickers();
  }

  getStickers(): void {
    this.stickerService.getStickers()
      .subscribe(stickers => this.newStickers = stickers);
  }

  delete(sticker: Sticker): void {
    this.newStickers = this.newStickers.filter(s => s !== sticker);
    this.stickerService.deleteSticker(sticker).subscribe();
  }

  convert(sticker: Sticker): void {
    this.conversionService.convert(sticker)
  }
}
