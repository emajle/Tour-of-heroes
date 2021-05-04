import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent
  },
  {
    path: 'edit/:id',
    component: HeroEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
