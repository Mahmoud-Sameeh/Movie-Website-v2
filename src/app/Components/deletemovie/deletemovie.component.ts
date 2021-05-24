import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {

  movieslist:any
  movieobj:any={
    title:"empty",
    duration:"0",
    studio:{name:"empty"},
    director:{firstName:"empty"}
  }
  flag:boolean=false;
  constructor(private ms:MoviesService,router:Router) {
   var num=router.url.split('/')[2]
    ms.getAllMovies().subscribe(
      (a)=>{console.log(a)
        this.movieslist=a
      },
      (b)=>{console.log(b)}
    )
   }

  ngOnInit(): void {
  }
  filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
   var   txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  showdata(e){
    console.log(e.target.value)
    var f:any=e.target.value;
    this.flag=true
    this.ms.getMoviesById(f.split('.')[0]).subscribe(
      (a)=>{
         this.movieobj=a
       },
      (b)=>{console.log(b)}
    )
    e.target.value="";
  }
  deletemovie(e){
     this.ms.DeleteMoviesById(this.movieobj.id).subscribe(
      (a)=>{
        console.log(a)
        console.log("success")
      },
      (b)=>{
        console.log(b)
        console.log("fail")
      }
    )
console.log(e)
  }
}
