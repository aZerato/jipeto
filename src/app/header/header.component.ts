import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  title:string = "Jipeto";

  @Output()
  navigationEvent: EventEmitter<{path: string}> = new EventEmitter<{path: string}>();

  onMenuItemSelected(path: string) {
    this.navigationEvent.emit({path: path});
  }
}
