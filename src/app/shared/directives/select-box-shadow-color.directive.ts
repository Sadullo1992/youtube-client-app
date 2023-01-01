import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSelectBoxShadowColor]',
})
export class SelectBoxShadowColorDirective implements OnInit {
  @Input() color = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.setBoxShadowColor();
  }

  setBoxShadowColor(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      `5px 10px 10px rgba(${this.color.slice(4, -1)}, 0.25)`,
    );
  }
}
