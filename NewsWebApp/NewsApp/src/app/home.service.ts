import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'


const topHeadlinesURL: string = 'https://newsapi.org/v2/top-headlines?country=sg&apiKey=110076d0b016494d9a225970b0382a56';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private httpClient: HttpClient) { }

  public getHeadlines<News>(){
    return this.httpClient.get(topHeadlinesURL);
  }
  
}
