import { Component, OnInit } from '@angular/core';
import { Result } from './shared/models/youtube.interface';
import { YoutubeService } from './shared/services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  loading: boolean = false;
  results!: Result[];
  initialVideos!: Result[];

  constructor(private youtubeService:YoutubeService) { }

  ngOnInit() {
    this.loading = true;
    this.youtubeService.getInicial().subscribe((results:Result[]) =>{        
      this.loading= false;
      this.initialVideos = results;
    }), (err: any) => {
      alert("Erro!!")
      this.loading= false;
    },
    () => { 
      this.loading= false;
    }

  }
  updateResults(results: Result[]): void {
    this.results = results
  }
}
