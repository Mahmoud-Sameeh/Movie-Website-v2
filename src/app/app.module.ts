import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './Components/container/container.component';
import { AboutComponent } from './Components/about/about.component';
import { ShowallComponent } from './Components/showall/showall.component';
import { ToastModule } from 'ng-uikit-pro-standard';

import { routes } from './app.routes';
import { WatchmovieComponent } from './Components/watchmovie/watchmovie.component';
import { MoviedetailsComponent } from './Components/moviedetails/moviedetails.component';
import { MoviecardComponent } from './Components/moviecard/moviecard.component';
import { AddmovieComponent } from './Components/addmovie/addmovie.component';
import { DeletemovieComponent } from './Components/deletemovie/deletemovie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatemovieComponent } from './Components/updatemovie/updatemovie.component';
import { ImageorvideoComponent } from './Components/imageorvideo/imageorvideo.component';
import { NotificationsComponent } from './Components/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AboutComponent,
     ShowallComponent,
     WatchmovieComponent,
     MoviedetailsComponent,
     MoviecardComponent,
     AddmovieComponent,
     DeletemovieComponent,
     UpdatemovieComponent,
     ImageorvideoComponent,
     NotificationsComponent ,
  ],
  imports: [
BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 