import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';



@Component({
  selector: 'app-tus-libros',
  templateUrl: './tus-libros.component.html',
  styleUrls: ['./tus-libros.component.css']
})
export class TusLibrosComponent implements OnInit {

  info: any;
  res!: Response;

  constructor(private book: ApiRestService) {
    this.info = {items: []}
   }

  ngOnInit(): void {
    this.book.getJsData().subscribe(res => {
      this.info = res
    })
  }

}
