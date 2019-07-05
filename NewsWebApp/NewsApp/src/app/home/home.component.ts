import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenav } from '@angular/material';
import { HomeService } from '../home.service';
import { News, Categories } from '../models/news';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  public newsList: Array<News>;
  public categoryList: Array<string> = ["Business", "Entertainment", "Health", "Science", "Sports", "Technology"];
  public newsTopic: string;


  //api_key = 110076d0b016494d9a225970b0382a56
  opened: boolean = false;
  constructor(private homeService: HomeService) { }
 
  ngOnInit() {
    this.getHeadlines('Top');
  }


  getBusinessList(category: string){
    this.homeService.getNewsByCategory<News>(category).subscribe((data =>      
      {
        console.log(data);
        this.newsList = data['articles'];
        this.newsTopic = category;
      }));
  }
  getHeadlines(topic: string){
    this.homeService.getHeadlines<News>().subscribe((data => 
      {
        console.log(data);
        this.newsList = data['articles'];
        this.newsTopic = topic;
      }));
  }
 
  
}
