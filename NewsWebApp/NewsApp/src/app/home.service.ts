import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

const API_KEY: string = '110076d0b016494d9a225970b0382a56';
const api_url: string = 'https://newsapi.org/v2/top-headlines?country=sg&category=';
const api_string: string = '&apiKey=';
const topHeadlinesURL: string = 'https://newsapi.org/v2/top-headlines?country=sg&apiKey=110076d0b016494d9a225970b0382a56';
const businessURL: string = 'https://newsapi.org/v2/top-headlines?country=sg&category=business&apiKey=110076d0b016494d9a225970b0382a56';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private httpClient: HttpClient) { }

  public getHeadlines<News>(){
    return this.httpClient.get(topHeadlinesURL);
  }

  public getNewsByCategory<News>(categoryName: string){
    return this.httpClient.get(api_url+categoryName+api_string+API_KEY);
  }
  
}
