import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { FormControl, FormGroup } from '@angular/forms';
  
@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {

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
  UpdateForm=new FormGroup({
    id:new FormControl(""),
    titlec:new FormControl(""),
    dur:new FormControl(""),
    studio:new FormControl(""),
    director:new FormControl(""),
  })
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
  showdata(e:any){
    console.log(e.target.value)
    var f:any=e.target.value;
    this.flag=true
    this.ms.getMoviesById(f.split('.')[0]).subscribe(
      (a)=>{
         this.movieobj=a
       },
      (b)=>{console.log(b)}
    )
    var ert= document.querySelector("#datalistone")as HTMLInputElement;
    ert.src ="";
   }
   openFile(event) {
    var input = event.target;
     var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
       var output: any = document.getElementById("updateemovieimage") as HTMLInputElement;
     
       console.log(output)
       output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);

   // console.log(reader.readAsDataURL(input.files[0]))
  }
  updateemovie(e){
    console.log(this.UpdateForm.value.titlec)
     this.ms.UpdateMoviesById(  +this.movieobj.id,{
      "id": +this.movieobj.id,
      "title": this.UpdateForm.value.titlec,
      "link": "https://www.youtube.com/embed/qGZcM1C15lQ",
      "imgdir":     (  document.getElementById("updateemovieimage") as HTMLInputElement).src,
      "duration": this.UpdateForm.value.dur,
      "description": "Description2",
      "reviews": [],
      "studio": {
        "id": 1,
        "name": this.UpdateForm.value.studio,
        "founded": this.UpdateForm.value.studio,
        "owner": this.UpdateForm.value.studio,
        "movies": []
      },
      "director": {
        "id": 1,
        "firstName": this.UpdateForm.value.director,
        "secondName": "Mahmoud",
        "dateOfBirth": "2021-02-02T00:00:00",
        "movies": []
      },
      "movieCharacters": [],
      "categories": []
    }).subscribe(
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
  submitUpdateForm(){
    console.log("sss")
   }
}

