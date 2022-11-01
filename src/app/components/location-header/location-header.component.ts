import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-header',
  templateUrl: './location-header.component.html',
  styleUrls: ['./location-header.component.scss'],
})
export class LocationHeaderComponent implements OnInit {
  @Input() location!: string;

  constructor() {}

  ngOnInit(): void {}
}
