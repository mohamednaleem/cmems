import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocationBackComponent } from '../location-back/location-back.component';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'lib-sub-header',
  standalone: true,
  imports: [LocationBackComponent, ActionButtonComponent],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {
  @Input() title = '';
  @Input() navTitle = '';
  @Input() actionButtonFrom = '';
  @Output() outEmittedClick = new EventEmitter<string>();

  constructor(private router: Router) {}
  naviate() {
    this.router.navigate([this.title.toLowerCase()]);
  }

  handleActionButton(event: string) {
    this.outEmittedClick.emit(event);
    console.log('event', event);
  }
}
