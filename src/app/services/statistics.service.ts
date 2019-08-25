import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


// HttpClient
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) {
  }

  getStatistics() {

    return this.http.get('http://localhost/auth/public/api/statistics');
  }

}
