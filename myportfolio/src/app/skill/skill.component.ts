import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  // progressValue = 50;
  // circles: number[] = Array(10).fill(0);

  constructor() { }

  skills = [
    { name: 'UI development', percent: 95 },
    { name: 'Server Side Development', percent: 80 },
    { name: 'Debugging & Troubleshooting', percent: 95 },
    { name: 'Database Management', percent: 80 },
    { name: 'Problem Solving', percent: 90 },
    { name: 'Version Control', percent: 95 }
  ];



  ngOnInit(): void { }

  getLeftRotation(percent: number): number {
    return Math.min(180, percent * 3.6);
  }

  getRightRotation(percent: number): number {
    return Math.max(0, (percent - 50) * 3.6);
  }
}
