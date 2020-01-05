import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedNewsPage } from './saved-news.page';

const routes: Routes = [
  {
    path: '',
    component: SavedNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedNewsPageRoutingModule {}
