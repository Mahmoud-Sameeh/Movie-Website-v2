import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  
  
  constructor(private Ms:MoviesService) {
    // Ms.getAllMovies().subscribe(
    //   (s)=>{console.log(s)},
    //   (e)=>{console.log(e)}
    // )
  }

  ngOnInit(): void {}
  //sidenavbar slider 
  addliderclass() {
    document.getElementById('sidebar').classList.toggle('active');
  }
}
