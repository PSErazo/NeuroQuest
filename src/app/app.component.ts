import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { ButtonComponent } from './shared/buttons/button.component';
import { SequenceComponent } from './components/sequence/sequence.component';
import { CommonModule } from '@angular/common';

interface games {
  name: string;
  router: string;
}

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
  games: games[] = [
    {
      name: 'Sequence Memory',
      router: '/sequencememory',
    },
    {
      name: 'Visual Memory',
      router: '/visualmemory',
    },
    {
      name: 'Typing',
      router: '/typing',
    },
    {
      name: 'Aim Trainer',
      router: '/aimtrainer',
    },
    {
      name: 'Number Memory',
      router: '/numbermemory',
    },
    {
      name: 'Reaction Time',
      router: '/reactiontime',
    },


  ];
}
