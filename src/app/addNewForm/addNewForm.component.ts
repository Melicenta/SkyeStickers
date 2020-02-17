import {Component, OnInit} from '@angular/core';
import {Sticker} from '../stickers/sticker.component';
import {StickerService} from '../sticker.service';


@Component({
  selector: 'app-form',
  templateUrl: './addNewForm.component.html',
  styleUrls: ['../stickers/stickers.component.scss']
})
export class AddNewFormComponent implements OnInit {
  newStickers: Sticker[];
  ngOnInit() {
    this.getStickers();
  }
  getStickers(): void {
    this.stickerService.getStickers()
      .subscribe(newStickers => this.newStickers = newStickers);
  }

  constructor(private stickerService: StickerService) { }
  add(name: string, content: string): void {
    name = name.trim();
    if (!name) { return; }
    this.stickerService.addSticker({ name, content } as Sticker)
      .subscribe(sticker => {
        this.newStickers.push(sticker);
      });
  }

}
