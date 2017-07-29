import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CubeComponent } from './cube/cube.component';
import { BaseIndexComponent } from './base-index/base-index.component';
import { TopLayerIndexComponent } from './top-layer-index/top-layer-index.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LettersComponent } from './letters/letters.component';
import { SkyBackgroundComponent } from './sky-background/sky-background.component';
import { SearchComponent } from './search/search.component';
import { GlidingPlaneComponent } from './gliding-plane/gliding-plane.component';
import { FullSearchComponent } from './full-search/full-search.component';
import { CommentComponent } from './comment/comment.component';
import { LetterByCategoryViewComponent } from './letter-by-category-view/letter-by-category-view.component';

import { CardService } from './services/card.service';
import { ListService } from './services/list.service';
import { SessionService } from './services/session.service';
import { GlobeViewComponent } from './globe-view/globe-view.component';
import { Globe2Component } from './globe2-/globe2-.component';
import { FlockingComponent } from './flocking/flocking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewLetterComponent } from './new-letter/new-letter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListsPageComponent,
    LogInComponent,
    SignUpComponent,
    CubeComponent,
    BaseIndexComponent,
    TopLayerIndexComponent,
    NavigationComponent,
    LettersComponent,
    SkyBackgroundComponent,
    SearchComponent,
    GlidingPlaneComponent,
    FullSearchComponent,
    CommentComponent,
    LetterByCategoryViewComponent,
    GlobeViewComponent,
    Globe2Component,
    FlockingComponent,
    DashboardComponent,
    NewLetterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CardService,
    ListService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
