import {
  NgModule,
  ModuleWithProviders,
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';
import {DefaultStyleCompatibilityModeModule} from '../core';


@Directive({
  selector: 'md-toolbar-row, mat-toolbar-row'
})
export class MdToolbarRow {}

@Component({
  selector: 'md-toolbar, mat-toolbar',
  template: require('./toolbar.html').toString(),
  styles: [require('./toolbar.css').toString()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MdToolbar {

  private _color: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  @Input()
  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._updateColor(value);
  }

  private _updateColor(newColor: string) {
    this._setElementColor(this._color, false);
    this._setElementColor(newColor, true);
    this._color = newColor;
  }

  private _setElementColor(color: string, isAdd: boolean) {
    if (color != null && color != '') {
      this.renderer.setElementClass(this.elementRef.nativeElement, `md-${color}`, isAdd);
    }
  }

}


@NgModule({
  imports: [DefaultStyleCompatibilityModeModule],
  exports: [MdToolbar, MdToolbarRow, DefaultStyleCompatibilityModeModule],
  declarations: [MdToolbar, MdToolbarRow],
})
export class MdToolbarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdToolbarModule,
      providers: []
    };
  }
}
