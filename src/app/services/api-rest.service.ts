import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  listCall: string= 'https://www.googleapis.com/books/v1/users/101050476007113578714/bookshelves'

  jsCall: string = '/1001/volumes?key='
  bolanoCall: string = '/1002/volumes?key='
  searchCall: string = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:Jonathan+Franzen&key='

  constructor( private http: HttpClient) {}

  getJsData() {
    let url = this.listCall + this.jsCall + environment.apiKey;
    return this.http.get(url);
  }
  getBolanoData() {
    let url = this.listCall + this.bolanoCall + environment.apiKey;
    return this.http.get(url);
  }
  getSearchData() {
    let url = this.searchCall + environment.apiKey;
    return this.http.get(url)
  }

}
