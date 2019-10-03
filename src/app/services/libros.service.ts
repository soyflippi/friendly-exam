import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Libro {
  id: string;
  marca: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})

export class LibrosService {
  constructor(private httpClient: HttpClient) { }

  // URL API
  private _URL = 'http://localhost:3535/api/v1/';

  public getLibro(id: any) {
    return this.httpClient.get(this._URL + 'books/' + id);
  }

  public getLibros() {
    return this.httpClient.get(this._URL + 'books');
  }

  public addLibro(data: any) {
    return this.httpClient.post(this._URL + 'books', data);
  }

  public updateLibro(data: any) {
    return this.httpClient.put(this._URL + 'books', data);
  }

  public deleteLibro(id: any) {
    return this.httpClient.delete(this._URL + 'books/' + id);
  }
}