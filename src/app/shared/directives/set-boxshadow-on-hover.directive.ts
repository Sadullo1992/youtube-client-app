import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSetBoxshadowOnHover]',
})
export class SetBoxshadowOnHoverDirective implements OnInit {
  @Input() color = '';

  boxshadowProperty = '';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.boxshadowProperty = `-3px 3px 5px rgba(${this.color.slice(
      4,
      -1,
    )}, 0.50)`;
    this.setBoxShadow(this.boxshadowProperty);
  }

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.setBoxShadow('unset');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.setBoxShadow(this.boxshadowProperty);
  }

  private setBoxShadow(property: string): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      property,
    );
  }
}
