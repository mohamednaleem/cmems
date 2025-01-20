import { Component } from '@angular/core';
import { WorkInProgressComponent } from 'projects/libs/common-ui/src/lib/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [WorkInProgressComponent],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss',
})
export class LogsComponent {}
