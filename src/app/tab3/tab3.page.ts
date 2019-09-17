import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../services/space';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  news: any;

  constructor(private spaceService: SpaceService) {}

  ngOnInit() {
    // this.spaceService.getNews().subscribe(data => this.news = data );
    // this.news = this.spaceService.getNews();
    // console.log(this.news);

    this.spaceService.getNews().subscribe(data => {
      this.news = data.docs;
    });

  }
}
