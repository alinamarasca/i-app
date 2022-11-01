import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss'],
})
export class NavigationListComponent implements OnInit {
  @Input() title!: string;
  @Input() items!: any;
  activeTab = 'One';
  @Output() location = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // emit location for location header
  getLocation($event: Event) {
    this.activeTab = ($event.target as HTMLElement).innerText;
    console.log('text', ($event.target as HTMLElement).innerText);
    console.log(
      'equal',
      this.activeTab === ($event.target as HTMLElement).innerText
    );
    this.location.emit(this.activeTab);
    console.log(this.activeTab);
  }
}
