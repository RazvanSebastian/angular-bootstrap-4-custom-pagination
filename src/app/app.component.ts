import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pages: number;
  selected: number;
  array: any;

  ngOnInit(): void {
    this.pages = 10;
    this.array = Array(this.pages).fill(false);
    this.array[0] = true;
    this.selected = 0;
  }

  selectPage(index: number) {
    this.array[this.selected] = false;
    this.array[index] = true;
    this.selected = index;
  }

  previous() {
    if (this.selected > 0) {
      this.array[this.selected] = false;
      this.array[this.selected - 1] = true;
      this.selected--;
    }
  }

  next() {
    if (this.selected < this.pages - 1) {
      this.array[this.selected] = false;
      this.array[this.selected + 1] = true;
      this.selected++;
    }
  }
}
