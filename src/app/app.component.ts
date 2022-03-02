import { Component } from '@angular/core';
import { startCase } from 'lodash-es';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = startCase('ng13-jest-esm-import-repro');
}
