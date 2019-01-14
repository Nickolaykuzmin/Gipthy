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
  arrResult = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    console.log(this.outer);
  }

  searchTerm(search) {
    this.searchService.getSearchResult(search).subscribe(result => {
      if (result.data.length) {
        console.log(result);
        const count = result.data.length;
        let lengthResult = Math.floor(Math.random() * count);
        lengthResult = this.uniqueResult(lengthResult, count);
        this.outer.nativeElement.insertAdjacentHTML(
          'beforeend',
          `<div class="col-md-4 col-12 mb-4"><img height="344px" class="w-100" src="${
            result.data[lengthResult].images.original.url
          }"></div>`
        );
      }
    });
  }

  private uniqueResult(lengthResult: number, count: any) {
    if (this.arrResult.length) {
      let i = 0;
      while (this.arrResult.includes(lengthResult)) {
        lengthResult = Math.floor(Math.random() * count);
        i++;
      }
    }
    this.arrResult.push(lengthResult);
    return lengthResult;
  }
}
