import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { InterrogatorsTableData } from 'projects/interrogators/src/app/models/interrogators.model';
import { KeyFormatPipe } from 'projects/libs/pipes/src/lib/key-format.pipe';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, KeyFormatPipe],
  providers: [KeyFormatPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardData: InterrogatorsTableData | null | undefined;
  @Input() cardTitle: string = '';
}
