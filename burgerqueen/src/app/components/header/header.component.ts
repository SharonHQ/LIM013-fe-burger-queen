import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public inputValue!: any[];

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchProducts.subscribe((result:any) => {
      this.inputValue = result;
    });
  }

  onKey(event: any) {
    this.inputValue = event.target.value;
    console.log(this.inputValue);
    this.searchService.getInputValue(this.inputValue);
  }
}
