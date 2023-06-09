import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  
  import { HomeRoutingModule } from './home-routing.module';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddPaysComponent } from './pays/add-pays/add-pays.component';
import { EditPaysComponent } from './pays/edit-pays/edit-pays.component';
import { ListPaysComponent } from './pays/list-pays/list-pays.component';
import { ListDeconnexionComponent } from './deconnexion/list-deconnexion/list-deconnexion.component';
import { ListNotFoundComponent } from './not-found/list-not-found/list-not-found.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
  import { Chart} from 'chart.js/auto'
  import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
    @NgModule({
    declarations: [
    HomeComponent,
    AddPaysComponent,
    EditPaysComponent,
    ListPaysComponent,
    ListDeconnexionComponent,
    ListNotFoundComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    
  ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      // NgMultiSelectDropDownModule.forRoot(),
    ]
  })
  export class HomeModule { }
  