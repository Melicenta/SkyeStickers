import { Component, OnInit } from '@angular/core';
import {Sticker} from './sticker.component';
import {StickerService} from '../sticker.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.scss']
})
export class StickersComponent implements OnInit {
  stickers: Sticker[];

  constructor(private stickerService: StickerService) { }

  ngOnInit() {
    this.getStickers();
  }

  getStickers(): void {
    this.stickerService.getStickers()
      .subscribe(stickers => this.stickers = stickers);
  }

  add(name: string, content: string): void {
    name = name.trim();
    if (!name) { return; }
    this.stickerService.addSticker({ name, content } as Sticker)
      .subscribe(sticker => {
        this.stickers.push(sticker);
      });
  }

  delete(sticker: Sticker): void {
    this.stickers = this.stickers.filter(s => s !== sticker);
    this.stickerService.deleteSticker(sticker).subscribe();
  }


}
