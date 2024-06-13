import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTypingAnimation]'
})
export class TypingAnimationDirective implements OnInit {
  @Input() text: string = '';
  @Input() delay: number = 100;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    let wordIndex = 0;
    const words = this.text.split(' ');

    const typeWord = () => {
      if (wordIndex < words.length) {
        this.el.nativeElement.textContent += words[wordIndex] + ' '; // Add space between words
        wordIndex++;
        setTimeout(typeWord, this.delay);
      }
    };

    typeWord();
  }
}
