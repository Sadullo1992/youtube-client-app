import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSelectBackgroundColor]',
})
export class SelectBackgroundColorDirective implements OnInit {
  @Input() color = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.setBackgroundColor();
  }

  setBackgroundColor(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.color,
    );
  }
}
