import { Component, ElementRef, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showSubText: boolean = false;
  openDiv: boolean = false;
  name: string = "Shreya Bhattacharya";
  typingName: string = "";
  constructor(public dataservice:DataServiceService) {

  }

  ngOnInit(): void {
this.animateTyping()
  }

animateTyping() {
    let currentIndex = 0;
    const nameArray = this.name.split('');

    const intervalId = setInterval(() => {
      if (currentIndex < nameArray.length) {
        this.typingName += nameArray[currentIndex];
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150); // Adjust the delay as needed (in milliseconds)
  }
  // getTypingText(index: number) {
  //   return this.typingName.substr(0, index + 1);
  // }
  onKnowMore(){
this.openDiv=true;
// window.scrollTo(1, 1)
  }
}
