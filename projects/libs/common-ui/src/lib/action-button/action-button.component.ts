import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-action-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {
  @Input() actionButtonFrom = '';
  @Output() outEmittedClick = new EventEmitter<string>();

  onActionButtonClick(action: string) {
    this.outEmittedClick.emit(action);
  }
}
