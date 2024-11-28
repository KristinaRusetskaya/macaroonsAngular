import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonBg]'
})
export class ButtonBgDirective implements OnInit{
  @Input() coolButtonDefaultBgColor: string = 'linear-gradient( 180deg, rgb(113,8,30) 0%, rgb(215,72,92) 100%)';
  @Input() coolButtonHoverBgColor: string = 'linear-gradient(180deg, rgb(75 5 19) 0%, rgb(169 55 71) 100%)';
  constructor(private el: ElementRef, private rend: Renderer2) { }

  private _backgroundImage: string = '';
  @HostBinding('style.backgroundImage')
  get getBgImage() {
    return this._backgroundImage;
  }

  private _isHover: boolean = false;
  @HostBinding('class.isOnHover')
  get getIsOnHover(): boolean {
    return this._isHover;
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeElementBgImage(this.coolButtonHoverBgColor);
    this._isHover = true;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeElementBgImage(this.coolButtonDefaultBgColor);
    this._isHover = false;
  }

  ngOnInit(): void {
    this.changeElementBgImage(this.coolButtonDefaultBgColor);
  }

  changeElementBgImage(color: string) {
    this._backgroundImage = color;
  }
}
