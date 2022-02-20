import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-alt',
  template: `
  <article>
  <div [style.background-image]="'url(' + coverPic + ')'" class="card">
    <div class="card-content">
      <h3 class="card-title">{{libro.volumeInfo.title}}</h3>
      <h4 class="card-author"><a href="#" target="_blank" rel="noopener noreferrer">{{libro.volumeInfo.authors[0]}}</a></h4>
      <p>Fecha de publicación: {{libro.volumeInfo.publishedDate | date:'longDate':'es'}}</p>
      <p>{{libro.volumeInfo.pageCount}} páginas</p>
      <a target="_blank" href="{{libro.volumeInfo.infoLink}}" class="button">Saber más</a>
    </div>
  </div>
</article>
`
,
  styleUrls: ['./card-alt.component.css']
})
export class CardAltComponent implements OnInit {

  @Input() libro: any;
  
  coverPic!: string;

  constructor() { }

  ngOnInit(): void {
    this.coverPic = this.libro.volumeInfo.imageLinks.thumbnail
  }

}