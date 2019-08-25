import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-articles-maker',
  templateUrl: './articles-maker.component.html',
  styleUrls: ['./articles-maker.component.css']
})
export class ArticlesMakerComponent implements OnInit {

  public name: string;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.name = 'test';
    }, 2000);
  }

  change() {
    this.name = 'sdfds';
  }


}
