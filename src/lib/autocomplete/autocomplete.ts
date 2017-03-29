import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'md-autocomplete, mat-autocomplete',
  template: require('./autocomplete.html'),
  styles: [require('./autocomplete.css').toString()],
  encapsulation: ViewEncapsulation.None,
})
export class MdAutocomplete {}

