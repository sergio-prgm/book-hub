import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  info: any;
  res!: Response;

  constructor(private book: ApiRestService) {
    this.info = {items: []}
   }

  ngOnInit(): void {
    this.book.getSearchData().subscribe(res => {
      this.info = res
    })
  }
}
