import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  { path: 'favourites', component: FavouritesComponent },
  { path: 'activity', component: ActivityComponent },
  { path: '', redirectTo: '/activity', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
