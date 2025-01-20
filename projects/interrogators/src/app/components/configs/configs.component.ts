import { Component } from '@angular/core';
import { WorkInProgressComponent } from 'projects/libs/common-ui/src/lib/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-configs',
  standalone: true,
  imports: [WorkInProgressComponent],
  templateUrl: './configs.component.html',
  styleUrl: './configs.component.scss',
})
export class ConfigsComponent {}
