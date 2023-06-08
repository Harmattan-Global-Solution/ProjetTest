import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPaysComponent } from './pays/list-pays/list-pays.component';
import { ListDeconnexionComponent } from './deconnexion/list-deconnexion/list-deconnexion.component';
import { ListNotFoundComponent } from './not-found/list-not-found/list-not-found.component';

const routes: Routes = [
  {path:"",component:ListPaysComponent},
{path:"pays",component:ListPaysComponent},
{path:"deconnexion",component:ListDeconnexionComponent},
{path:"**",component:ListNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }