import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from './../../services/movies.service';
 
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})

export class AddmovieComponent implements OnInit {

   categories:any
  constructor(private Ms:MoviesService) {
    Ms.Getcategories().subscribe(
      (s)=>{console.log(s)},
      (e)=>{e}
    )
   }

  ngOnInit(): void {
  }
   addmoviefrom(title,duration,description,image,studio,director,MovieLink){
   var image :any= document.getElementById('addmovieimage') as HTMLInputElement 
   var x= {
       id:0,
       title:title,
       duration:duration,
       description:description,
       imgdir:image.src
     }
     this.Ms.AddMovies({
      "id": 0,
      "title": title,
      "link": MovieLink,
      "imgdir": image.src,
      "duration": duration,
      "description": description,
      "reviews": [],
      "studio": {
        "id": 0,
        "name": studio,
        "founded": studio,
        "owner": studio
      },
      "director": {
        "id": 0,
        "firstName": director,
        "secondName": director,
        "dateOfBirth": "2021-05-21T21:34:59.003Z",
        "movies": []
      },
      "movieCharacters": [],
      "categories": [
      ]
    }).subscribe(
      (e)=>{
        console.log(e)
        console.log("success")
      },
      (c)=>{
        console.log(c)
        console.log("success")
      }
    )
     console.log(x)
   }
  RestMovie(title,duration,description,image,studio,director){
    title.value="";
    duration.value="";
    description.value="";
    image.value="";
    studio.value="";
    director.value="";
   }
  RestMovie2(title,duration,description,image,studio,director){
    title.value="";
    duration.value="";
    description.value="";
    image.value="";
    studio.value="";
    director.value="";
   }
   openFile(event) {
    var input = event.target;
     var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
       var output: any = document.getElementById("addmovieimage") as HTMLInputElement;
      output.src = dataURL;
      
    };
    reader.readAsDataURL(input.files[0]);
   // console.log(reader.readAsDataURL(input.files[0]))
  }
  profileForm :any= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
   
  })
  openFile2(event) {
    var input = event.target;
     var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
       var output: any = document.getElementById("addmovieimage2") as HTMLInputElement;
      output.src = dataURL;
      
    };
    reader.readAsDataURL(input.files[0]);
   // console.log(reader.readAsDataURL(input.files[0]))
  }   
  onSubmit( ){
    console.warn(this.profileForm.value);
 
   }
   url;
   format;
   onSelectFile(event) {
     const file = event.target.files && event.target.files[0];
     if (file) {
       var reader = new FileReader();
       reader.readAsDataURL(file);
       if(file.type.indexOf('image')> -1){
         this.format = 'image';
       } else if(file.type.indexOf('video')> -1){
         this.format = 'video';
       }
       reader.onload = (event) => {
         this.url = (<FileReader>event.target).result;
       
       }
     }
   }
   addmoviefrom2(title,duration,description,image,studio,director,MovieLink){
    var image :any= document.getElementById('addmovieimage2') as HTMLInputElement 
    var x= {
        id:0,
        title:title,
        duration:duration,
        description:description,
        imgdir:image.src
      }
      this.Ms.AddMovies({
       "id": 0,
       "title": title,
       "link": (document.getElementById('videouploader') as HTMLInputElement).src,
       "imgdir": image.src,
       "duration": duration,
       "description": description,
       "reviews": [],
       "studio": {
         "id": 0,
         "name": studio,
         "founded": studio,
         "owner": studio
       },
       "director": {
         "id": 0,
         "firstName": director,
         "secondName": director,
         "dateOfBirth": "2021-05-21T21:34:59.003Z",
         "movies": []
       },
       "movieCharacters": [],
       "categories": [
       ]
     }).subscribe(
       (e)=>{
         console.log(e)
         console.log("success")
       },
       (c)=>{
         console.log(c)
         console.log("success")
       }
     )
      console.log(x)
    }
}
