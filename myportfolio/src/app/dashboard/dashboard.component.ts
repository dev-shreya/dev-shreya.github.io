import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  openDiv:boolean=false;
  constructor(private dataservice:DataServiceService) { }

  ngOnInit(): void {
  }
  onOpenAbout(){
this.dataservice.openAbout=true;
this.dataservice.openWork=false;
  }
  onOpenWork(){
    this.dataservice.openWork=true;
    this.dataservice.openAbout=false;
  }
  onOpenSkill(){
    this.dataservice.openSkill=true;
    this.dataservice.openWork=false;
    this.dataservice.openAbout=false;
  }
  openContact(){
    this.dataservice.openContact=true;
    this.dataservice.openAbout=false;
    this.dataservice.openSkill=false;
    this.dataservice.openWork=false;
  }
}
