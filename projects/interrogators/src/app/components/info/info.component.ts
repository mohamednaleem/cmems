import { Component } from '@angular/core';
import { CardComponent } from 'projects/libs/common-ui/src/lib/card/card.component';
import { InterrogatorsService } from '../../services/interrogators.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  data: any;
  constructor(public interrogatorsService: InterrogatorsService) {}

  ngOnInit(): void {}
}
