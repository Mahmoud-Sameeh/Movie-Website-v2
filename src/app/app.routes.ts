import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ShowallComponent } from './Components/showall/showall.component';
import { MoviedetailsComponent } from './Components/moviedetails/moviedetails.component';
import { WatchmovieComponent } from './Components/watchmovie/watchmovie.component';
import { MoviecardComponent } from './Components/moviecard/moviecard.component';
import { AddmovieComponent } from './Components/addmovie/addmovie.component';
import { DeletemovieComponent } from './Components/deletemovie/deletemovie.component';
import { UpdatemovieComponent } from './Components/updatemovie/updatemovie.component';
import { ImageorvideoComponent } from './Components/imageorvideo/imageorvideo.component';

 export const routes: Routes =[
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  } ,
  {
    path: 'imageandvideo',
    component: ImageorvideoComponent,
    pathMatch: 'full',
  } ,
  {
    path: 'showall',
    component: ShowallComponent,
    pathMatch: 'full',
  }   ,
  {
    path: 'moviedetails/:id',
    component: MoviedetailsComponent,
    pathMatch: 'full',
  } ,
  {
    path: 'watchmovie/:id',
    component: WatchmovieComponent,
    pathMatch: 'full',
  } ,
  {
    path: 'moviecard',
    component: MoviecardComponent,
    pathMatch: 'full',
  } ,
  {
    path: 'addmovie',
    component: AddmovieComponent,
    pathMatch: 'full',
  } ,
  {
    path: 'deletemovie',
    component: DeletemovieComponent,
    pathMatch: 'full',
  } ,
  {
    path: 'update',
    component: UpdatemovieComponent,
    pathMatch: 'full',
  } ,
];