import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSelectBorderColor]',
})
export class SelectBorderColorDirective implements OnInit {
  @Input() color = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.setBorderColor();
  }

  setBorderColor(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'border-bottom-color',
      this.color,
    );
  }
}
