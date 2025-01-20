import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SubMenuComponent } from 'projects/libs/common-ui/src/lib/sub-menu/sub-menu.component';

import { SubHeaderComponent } from 'projects/libs/common-ui/src/lib/sub-header/sub-header.component';
import { Menus } from '../../models/interrogators.model';
import { InterrogatorsService } from '../../services/interrogators.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'projects/libs/common-ui/src/lib/dialog/dialog.component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-interrogators-details',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, SubMenuComponent, RouterOutlet],
  templateUrl: './interrogators_details.component.html',
  styleUrl: './interrogators_details.component.scss',
})
export class InterrogatorsDetailsComponent implements OnInit {
  interrogatorId: string | null = null;
  actionButtonFrom: string = 'Edit';
  menuItems: Menus[] = [
    { label: 'Info', link: 'info' },
    { label: 'Logs', link: 'logs' },
    { label: 'Configs', link: 'configs' },
  ];

  title = '';
  data: any;
  navTitle = 'Interrogators';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private interrogatorsService: InterrogatorsService,
    private dialog: MatDialog
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras.state?.['data'];
    this.interrogatorsService.announceInterrogatorsData(this.data);
    console.log('naleem', this.data);
  }
  ngOnInit(): void {
    this.interrogatorId = this.route.snapshot.paramMap.get('id');
    this.title = this.data.serial;
    console.log('this.interrogatorId', this.interrogatorId);
  }

  outEmittedClick(event: string) {
    this.openDialog();
    console.log('event nalem', event);
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { message: 'Naleem' },
      disableClose: true,
      // position: {top: 'top'}
    });

    dialogRef
      .afterClosed()
      .pipe(
        tap((dialogResult: boolean) => {
          console.log('dialog close', dialogResult);
        })
      )
      .subscribe();
  }
}
