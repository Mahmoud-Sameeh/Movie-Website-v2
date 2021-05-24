import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = "https://localhost:44335/api/Movies";
  baseUrl2 = "https://localhost:44335/api/Director";
  baseUrl3 = "https://localhost:44335/api/Categories";
  constructor(private MyClient: HttpClient) {}
  getAllMovies() {
    return this.MyClient.get(this.baseUrl );
  }
  //get by id
  getMoviesById(id: any) {
    return this.MyClient.get(this.baseUrl +'/'+ id);
  }
  //delete
  DeleteMoviesById(id: any) {
    return this.MyClient.delete(this.baseUrl + "/" + id);
  }
  //put
  UpdateMoviesById(id: any, Movies: any) {
    return this.MyClient.put(this.baseUrl + "/" + id, Movies);
  }
  AddMovies(movie:any) {
    return this.MyClient.post(this.baseUrl  ,movie);
  }
  GetMovieDirector() {
    return this.MyClient.get(this.baseUrl2  );
  }
  Getcategories() {
    return this.MyClient.get(this.baseUrl3);
  }

}
