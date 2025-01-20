import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from 'projects/libs/common-ui/src/lib/sub-header/sub-header.component';
import { WorkInProgressComponent } from 'projects/libs/common-ui/src/lib/work-in-progress/work-in-progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubHeaderComponent, WorkInProgressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'patients';
}
