import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { ButtonComponent } from './shared/button/button.component';
import { SequenceComponent } from './sequence/sequence.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    ButtonComponent,
    SequenceComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  games = [
    {
      name: 'Sequence Memory',
      router: '/sequencememory',
    },
    {
      name: 'Visual Memory',
      router: '/visualmemory',
    },
  ];
}
