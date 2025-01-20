import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Menus } from 'projects/interrogators/src/app/models/interrogators.model';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'lib-sub-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
})
export class SubMenuComponent {
  @Input() menuItems!: Menus[] | undefined;
  @Input() queryParams = { filter: 'Authorized' };

  getFilter(link: string): string {
    switch (link) {
      case 'active':
        return 'authorized';
      case 'unclaimed':
        return 'unclaimed';
      case 'broken':
        return 'broken';
      case 'returned':
        return 'returned';
      case 'retired':
        return 'retired';
      default:
        return '';
    }
  }
}
