import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // constructor() { }
  constructor(public api:ApiService) { }

  ngOnInit(): void {
  }

}