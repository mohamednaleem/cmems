import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  { path: '', redirectTo: 'interrogators', pathMatch: 'full' },
  {
    path: 'interrogators',
    // redirectTo: '/?filter=',
    loadComponent: () => import('interrogators/InterrogatorsComponent').then(module => module.InterrogatorsComponent),
  },
  { path: 'interrogators/:id', redirectTo: '/interrogators/:id/info', pathMatch: 'full' },
  {
    path: 'patients',
    loadComponent: () => import('patients/patients').then(module => module.AppComponent),
    // loadComponent: () =>
    //    loadRemoteModule({
    //     remoteEntry: 'http://localhost:4201/remotePatients.js',
    //     remoteName: 'patients',
    //     exposedModule: '/patients/patients',
    //   }).then(module => module.AppComponent),
  },
  {
    path: 'interrogators/:id',
    children: [
      {
        path: 'info',
        loadComponent: () => import('interrogators/InfoComponent').then(module => module.InfoComponent),
      },
      {
        path: 'configs',
        loadComponent: () => import('interrogators/ConfigsComponent').then(module => module.ConfigsComponent),
      },
      {
        path: 'logs',
        loadComponent: () => import('interrogators/LogsComponent').then(module => module.LogsComponent),
      },
    ],
    loadComponent: () =>
      import('interrogators/InterrogatorsDetailsComponent').then(module => module.InterrogatorsDetailsComponent),
  },
];

// const routes: Routes = [
//   {
//     path: 'interrogators/:id',
//     component: InterrogatorsDetailsComponent,
//     children: [
//       { path: 'info', component: InfoComponent },
//       { path: 'config', component: ConfigComponent },
//       { path: 'logs', component: LogsComponent },
//     ],
//   },
//   { path: '', redirectTo: '/interrogators/316/info', pathMatch: 'full' },
// ];
