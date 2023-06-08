import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  
  import { HomeRoutingModule } from './home-routing.module';
  import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddPaysComponent } from './pays/add-pays/add-pays.component';
import { EditPaysComponent } from './pays/edit-pays/edit-pays.component';
import { ListPaysComponent } from './pays/list-pays/list-pays.component';
import { ListDeconnexionComponent } from './deconnexion/list-deconnexion/list-deconnexion.component';
import { ListNotFoundComponent } from './not-found/list-not-found/list-not-found.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
  
  
  @NgModule({
    declarations: [
    HomeComponent,
    AddPaysComponent,
    EditPaysComponent,
    ListPaysComponent,
    ListDeconnexionComponent,
    ListNotFoundComponent,
    SidebarComponent,
    NavbarComponent
  ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      ReactiveFormsModule
    ]
  })
  export class HomeModule { }
  