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
  file: string | ArrayBuffer;
  color: string

  constructor(private stickerService: StickerService,
              private conversionService: ConversionService) {
    this.color = '#e20074'
  }

  ngOnInit() {
    this.getStickers();
  }

  getStickers(): void {
    this.stickerService.getStickers()
      .subscribe(stickers => this.stickers = stickers
        .sort((a,b)=> b.id - a.id));
  }

  add(name: string, content: string, textColour?: string, bgColour?: string): void {
    const _name = name.trim();

    if (!name) { return; }
    this.stickerService
      .addSticker({ name:_name, content, background: this.file, bgColour, textColour } as Sticker)
      .subscribe(stickerItem => {
        this.stickers.push(stickerItem);
      });
    this.getStickers()
  }

  edit(name: string, content, bgColour, textColour): void {
    this.stickerService
      .updateSticker({name, content,textColour,bgColour} as Sticker)
      .subscribe( stickerItem => {
        console.log('successfully updated', stickerItem)
        this.getStickers()
      })
  }

  onFileUpload(event: any):void {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = ()=>{
        this.file = reader.result
      }
  }

  convert(sticker: Sticker): void {
    this.conversionService.convert(sticker)
  }
}
