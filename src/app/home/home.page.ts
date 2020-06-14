import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public actualSegment: string;

  constructor() {}

  ngOnInit(): void {
    this.actualSegment = 'home';
  }

  public segmentChanged(ev: CustomEvent) {
    this.actualSegment = ev.detail.value;
  }

  get showingHome() {
    return this.actualSegment === 'home';
  }

  get showingMessages() {
    return this.actualSegment === 'messages';
  }

  get showingAdventures() {
    return this.actualSegment === 'adventures';
  }

}
