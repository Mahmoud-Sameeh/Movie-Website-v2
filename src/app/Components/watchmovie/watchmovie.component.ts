import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchmovie',
  templateUrl: './watchmovie.component.html',
  styleUrls: ['./watchmovie.component.scss']
})
export class WatchmovieComponent implements OnInit {

  link:any
  movie:any
  constructor(Ms:MoviesService,router:Router) {
    Ms.getMoviesById(router.url.split('/')[2]).subscribe(
      (g)=>{
        this.movie=g;
        this.link=this.movie.link;
        //console.log(this.movie.link) 
        var s:any= document.getElementById('iframeved') as HTMLInputElement
        s.src=this.link
        this.movie=g
      },
      (w)=>{console.log(w.link)}
    ) 
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   console.log(this.movie.link)
    
  }

}
