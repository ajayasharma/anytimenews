import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    loadChildren: './publishers/publishers.module#PublishersPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'USER'
    }
  },
  {
    path: 'publisher-news',
    loadChildren: './publisher-news/publisher-news.module#PublisherNewsPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'USER'
    }
  },
  {
    path: 'saved-news',
    loadChildren: './saved-news/saved-news.module#SavedNewsPageModule',
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
