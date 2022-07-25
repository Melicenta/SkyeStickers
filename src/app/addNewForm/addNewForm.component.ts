import {Component, OnInit} from '@angular/core';
import {Sticker} from '../stickers/sticker.component';
import {StickerService} from '../sticker.service';
import {ConversionService} from '../conversion.service';


@Component({
  selector: 'app-form',
  templateUrl: './addNewForm.component.html',
  styleUrls: ['../stickers/stickers.component.scss']
})

export class AddNewFormComponent implements OnInit{
  stickers: Sticker[];
  sticker: Sticker;

  constructor(private stickerService: StickerService,
              private conversionService: ConversionService) { }

  ngOnInit() {
    this.getStickers();
  }

  getStickers(): void {
    this.stickerService.getStickers()
      .subscribe(stickers => this.stickers = stickers);
  }

  add(name: string, content: string, background: string | ArrayBuffer): void {
    const _name = name.trim();

    if (!name) { return; }
    this.stickerService
      .addSticker({ name:_name, content, background } as Sticker)
      .subscribe(stickerItem => {
        this.stickers.push(stickerItem);
      });
    this.getStickers()
  }

  onFileUpload(event: any):void {
      const file = event.target.files[0];
      const reader = new FileReader();
      let res: string | ArrayBuffer = ''

      reader.readAsDataURL(file);

      reader.onloadend = ()=>{
        res = reader.result
      }
  }

  convert(sticker: Sticker): void {
    this.conversionService.convert(sticker)
  }
}
