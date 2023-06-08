import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menu:any={
    titre:"Menu",
    items:[
      {libelle:"Pays",path:"/home/pays"},
{libelle:"Deconnexion",path:"/home/deconnexion"},
{libelle:"NotFound",path:"/home/not_found"}
    ]
  }
}
