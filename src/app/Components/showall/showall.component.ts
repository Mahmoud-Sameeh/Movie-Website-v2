import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'ng-uikit-pro-standard';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
movies:any
  constructor(private Ms:MoviesService, router:Router) {
    let movieid=router.url.split('/')[2];
    Ms.getAllMovies().subscribe(
      (s)=>{
      this.movies=s,
      console.log(this.movies)
    },

        (e)=>{console.log(e)}
        
      )
   }
   private toast: ToastService

  ngOnInit(): void {
    () => this.toast.info("It works!")

  }

}
