import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  private articles: any[];

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {

    this.articlesService.getAllArticles()
      .subscribe((result: any[]) => {
        this.articles = result;
      });


  }


}
