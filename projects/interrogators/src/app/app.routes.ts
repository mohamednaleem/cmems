import { Routes } from '@angular/router';
import { InterrogatorsDetailsComponent } from './components/interrogators-details/interrogators_details.component';
import { InterrogatorsComponent } from './components/interrogators/interrogators.component';
import { LogsComponent } from './components/logs/logs.component';
import { ConfigsComponent } from './components/configs/configs.component';
import { InfoComponent } from './components/info/info.component';

export const routes: Routes = [
  { path: '', redirectTo: 'interrogators', pathMatch: 'full' },
  { path: 'interrogators', component: InterrogatorsComponent },
  { path: 'interrogators/:id', redirectTo: '/interrogators/:id/info', pathMatch: 'full' },
  {
    path: 'interrogators/:id',
    component: InterrogatorsDetailsComponent,
    children: [
      { path: 'info', component: InfoComponent },
      { path: 'logs', component: LogsComponent },
      { path: 'configs', component: ConfigsComponent },
    ],
  },
];
