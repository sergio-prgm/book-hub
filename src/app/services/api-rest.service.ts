import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  jsCall: string = 'https://www.googleapis.com/books/v1/users/101050476007113578714/bookshelves/1001/volumes?key='
  bolanoCall: string = 'https://www.googleapis.com/books/v1/users/101050476007113578714/bookshelves/1002/volumes?key='
  mockjsCall: string = '../assets/book-list.json'

  constructor( private http: HttpClient) {}

  getJsData() {
    let url = this.jsCall + environment.apiKey;
    return this.http.get(url);
  }
  getBolanoData() {
    let url = this.bolanoCall + environment.apiKey;
    return this.http.get(url);
  }

}
