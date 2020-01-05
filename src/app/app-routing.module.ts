import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  {
    path: 'publishers',
    loadChildren: './publishers/publishers.module#PublishersPageModule'
  },
  {
    path: 'publisher-news',
    loadChildren: './publisher-news/publisher-news.module#PublisherNewsPageModule'
  },
  {
    path: 'saved-news',
    loadChildren: './saved-news/saved-news.module#SavedNewsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
