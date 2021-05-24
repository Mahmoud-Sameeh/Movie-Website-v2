import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {

  @Input() movie:any
  constructor(private Ms:MoviesService,private router:Router) { 
    

  }

  ngOnInit(): void {
    var x=this.movie
    console.log(this.movie.id)

  }
  ngAfterViewInit(): void {

  }
}
