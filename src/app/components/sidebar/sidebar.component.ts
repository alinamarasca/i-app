import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  active = 'Overview';
  @Output() location = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // emit location for location header
  getLocation($event: Event) {
    this.active = ($event.target as HTMLElement).innerText;
    this.location.emit(this.active);
  }
}
