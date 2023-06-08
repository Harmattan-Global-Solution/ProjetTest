import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  filtered_list:any[]=[]
  recherche:string=""

  // constructor() { }
  constructor(public api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
  async deconnexion(){
    this.api.network = {
      token: undefined,
      status: true,
      message: "Aucun probléme détecté",
    }
    this.api.token = {
      token_key: null,
      token_decoded: null,
      user_connected: null,
      is_expired: null,
      date_expiration: null
    }
    await this.api.delete_from_local_storage("token")
    await this.api.delete_from_local_storage("user")
    this.api.token={tokenExist:false}
    this.router.navigate(["/public/login"])
  }
  
}