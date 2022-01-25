import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  info: any;
  res!: Response;

  constructor(private book: ApiRestService) {
    this.info = {items: []}
   }

  ngOnInit(): void {
    this.book.getBolanoData().subscribe(res => {
      this.info = res
    })
  }

}
