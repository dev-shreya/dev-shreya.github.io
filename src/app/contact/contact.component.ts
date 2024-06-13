import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url:string){
window.open(url, "_blank")
  }
  onLinkedIn() {
    const externalUrl = "https://www.linkedin.com/in/shreya-bhattacharya-21402812a/";
    window.open(externalUrl, '_blank');
    console.log("LinkedIn");
  }
  onGit(){
    const externalGitUrl = "https://github.com/dev-shreya";
    window.open(externalGitUrl, '_blank');
    console.log("Git");
  }
}
