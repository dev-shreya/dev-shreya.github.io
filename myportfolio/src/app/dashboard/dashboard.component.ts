import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  openDiv:boolean=false;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  onOpenAbout(){
this.dataService.openAbout=true;
this.dataService.openWork=false;
  }
  onOpenWork(){
    this.dataService.openWork=true;
    this.dataService.openAbout=false;
  }
  onOpenSkill(){
    this.dataService.openSkill=true;
    this.dataService.openWork=false;
    this.dataService.openAbout=false;
  }
  openContact(){
    this.dataService.openContact=true;
    this.dataService.openAbout=false;
    this.dataService.openSkill=false;
    this.dataService.openWork=false;
  }
}
