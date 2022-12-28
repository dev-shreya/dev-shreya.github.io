import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
openAbout:boolean=false;
openWork:boolean=false;
openSkill:boolean=false;
openContact:boolean=false;
  constructor() { }
}
