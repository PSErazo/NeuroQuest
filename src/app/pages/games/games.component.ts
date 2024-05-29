import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/buttons/button.component';
import { RouterOutlet } from '@angular/router';

interface games {
  name: string;
  router: string;
}

@Component({
  selector: 'pages-game',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent],
  templateUrl: './games.component.html',
})
export class GamesComponent {
  games: games[] = [
    {
      name: 'Sequence Memory',
      router: '/game/sequencememory',
    },
    {
      name: 'Visual Memory',
      router: '/game/visualmemory',
    },
    {
      name: 'Typing',
      router: '/game/typing',
    },
    {
      name: 'Aim Trainer',
      router: '/game/aimtrainer',
    },
    {
      name: 'Number Memory',
      router: '/game/numbermemory',
    },
    {
      name: 'Reaction Time',
      router: '/game/reactiontime',
    },
  ];
}
