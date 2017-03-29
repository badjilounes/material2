import {
  Component,
  ViewEncapsulation,
  Renderer,
  ElementRef,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { MdLine, MdLineSetter } from '../core';
import {coerceToNumber} from './grid-list-measure';

@Component({
  selector: 'md-grid-tile, mat-grid-tile',
  host: { 'role': 'listitem' },
  template: require('./grid-tile.html'),
  styles: [require('./grid-list.css').toString()],
  encapsulation: ViewEncapsulation.None,
})
export class MdGridTile {
  _rowspan: number = 1;
  _colspan: number = 1;

  constructor(private _renderer: Renderer, private _element: ElementRef) {}

  @Input()
  get rowspan() {
    return this._rowspan;
  }

  @Input()
  get colspan() {
    return this._colspan;
  }

  set rowspan(value) {
    this._rowspan = coerceToNumber(value);
  }

  set colspan(value) {
    this._colspan = coerceToNumber(value);
  }

  /**
   * Sets the style of the grid-tile element.  Needs to be set manually to avoid
   * "Changed after checked" errors that would occur with HostBinding.
   */
  _setStyle(property: string, value: string): void {
    this._renderer.setElementStyle(this._element.nativeElement, property, value);
  }

}

@Component({
  selector: 'md-grid-tile-header, mat-grid-tile-header, md-grid-tile-footer, mat-grid-tile-footer',
  template: require('./grid-tile-text.html')
})
export class MdGridTileText implements AfterContentInit {
  /**
   *  Helper that watches the number of lines in a text area and sets
   * a class on the host element that matches the line count.
   */
  _lineSetter: MdLineSetter;
  @ContentChildren(MdLine) _lines: QueryList<MdLine>;

  constructor(private _renderer: Renderer, private _element: ElementRef) {}

  ngAfterContentInit() {
    this._lineSetter = new MdLineSetter(this._lines, this._renderer, this._element);
  }
}

