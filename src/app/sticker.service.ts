import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Sticker} from './stickers/sticker.component';
import MessageService from './message.service';


@Injectable({ providedIn: 'root' })
export class StickerService {

  private stickersUrl = 'api/stickers';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getStickers (): Observable<Sticker[]> {
    return this.http.get<Sticker[]>(this.stickersUrl)
      .pipe(
        tap(_ => this.log('fetched stickers')),
        catchError(this.handleError<Sticker[]>('getStickers', []))
      );
  }


  getStickerNo404<Data>(id: number): Observable<Sticker> {
    const url = `${this.stickersUrl}/?id=${id}`;
    return this.http.get<Sticker[]>(url)
      .pipe(
        map(stickers => stickers[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} sticker id=${id}`);
        }),
        catchError(this.handleError<Sticker>(`getSticker id=${id}`))
      );
  }


  getSticker(id: number): Observable<Sticker> {
    const url = `${this.stickersUrl}/${id}`;
    return this.http.get<Sticker>(url).pipe(
      tap(_ => this.log(`fetched sticker id=${id}`)),
      catchError(this.handleError<Sticker>(`getSticker id=${id}`))
    );
  }


  searchStickers(term: string): Observable<Sticker[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Sticker[]>(`${this.stickersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Sticker[]>('searchStickers', []))
    );
  }

  //////// Save methods //////////

  addSticker (sticker: Sticker): Observable<Sticker> {
    return this.http.post<Sticker>(this.stickersUrl, sticker, this.httpOptions).pipe(
      tap((newSticker: Sticker) => this.log(`added hero w/ id=${newSticker.id}`)),
      catchError(this.handleError<Sticker>('addSticker'))
    );
  }

  deleteSticker (sticker: Sticker | number): Observable<Sticker> {
    const id = typeof sticker === 'number' ? sticker : sticker.id;
    const url = `${this.stickersUrl}/${id}`;

    return this.http.delete<Sticker>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Sticker>('deleteSticker'))
    );
  }

  updateSticker (sticker: Sticker): Observable<any> {
    return this.http.put(this.stickersUrl, sticker, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${sticker.id}`)),
      catchError(this.handleError<any>('updateSticker'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`StickerService: ${message}`);
  }
}
