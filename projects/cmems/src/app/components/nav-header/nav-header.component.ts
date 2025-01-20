import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent implements OnInit {
  navItems = [
    { label: 'Patients', link: '/patients' },
    { label: 'Sensors', link: '/sensors' },
    { label: 'PWA', link: '/pwa' },
    { label: 'Sites', link: '/sites' },
    { label: 'Interrogators', link: '/interrogators' },
    { label: 'Translations', link: '/translations' },
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

  ngOnInit(): void {}
}
