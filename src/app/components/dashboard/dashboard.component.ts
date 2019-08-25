import {Component, OnInit} from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';

interface Person {
  name: string;
  age?: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {


  private usersNumber: number;
  private articlesNumber: number;
  private commentesNumber: number;

  constructor(private statistics: StatisticsService) {


  }

  ngOnInit() {
    //
    this.statistics.getStatistics()
      .subscribe((result: any) => {

        this.usersNumber = result.users;
        this.articlesNumber = result.articles;
        this.commentesNumber = result.comments;


      });


  }

}
