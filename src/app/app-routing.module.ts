import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {ArticlesMakerComponent} from './components/articles-maker/articles-maker.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },

  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'articles/create',
    component: ArticlesMakerComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
