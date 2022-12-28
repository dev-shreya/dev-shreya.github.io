import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 openDiv:boolean=false;
  constructor(public dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  onKnowMore(){
this.openDiv=true;
// window.scrollTo(1, 1)
  }
}
