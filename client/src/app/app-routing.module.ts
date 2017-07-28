import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ListsPageComponent } from './lists-page/lists-page.component';
import { AppComponent } from './app.component';
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
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'lists',
    component: ListsPageComponent
  },

  {
    path: 'forum',
    component: LetterByCategoryViewComponent
  },
  {
    path: 'search',
    component: FullSearchComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
