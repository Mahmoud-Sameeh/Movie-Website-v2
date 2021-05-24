import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  movieobjdetails:any
  constructor(Ms:MoviesService,router:Router) { 
    let num = router.url.split('/')[2]
    Ms.getMoviesById(num).subscribe(
      (e)=>{this.movieobjdetails=e
      console.log(e)
      }
    
    )
    
  }

  ngOnInit(): void {
  }

}
