import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-searterm',
  templateUrl: './searterm.component.html',
  styleUrls: ['./searterm.component.css']
})
export class SeartermComponent implements OnInit {
  @ViewChild('outer') outer: ElementRef;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    console.log(this.outer);
  }

  searchTerm(search) {
    this.searchService.getSearchResult(search).subscribe(result => {
      if (result.data.length) {
        console.log(result);
        const count = result.data.length;
        const lengthResult = Math.floor(Math.random() * count);
        this.outer.nativeElement.insertAdjacentHTML(
          'beforeend',
          `<div class="col-md-4 col-12 mb-4"><img height="344px" class="w-100" src="${
            result.data[lengthResult].images.original.url
          }"></div>`
        );
      }
    });
    // console.log(search);
  }
}
