import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../shared/buttons/button.component';

interface games {
  name: string;
  router: string;
  text: string;
  icono: string;
}

@Component({
  selector: 'pages-game',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent],
  templateUrl: './games.component.html',
})
export default class GamesComponent {
  games: games[] = [
    {
      name: 'Sequence Memory',
      router: 'sequencememory',
      text: '¿Eres capaz de recordar el patron?',
      icono: "assets/sequencebutton.svg"
    },
    {
      name: 'Visual Memory',
      router: 'visualmemory',
      text: 'Solo un cerebro como el mío puede memorizar tanto',
      icono: "assets/sequencebutton.svg"
    },
    {
      name: 'Typing',
      router: 'typing',
      text: '¿Eres rápido con los dedos? Demuestralo!',
      icono: "assets/typing.svg"
    },
    {
      name: 'Aim Trainer',
      router: 'aimtrainer',
      text: '¿Que tán preciso y rápido eres?',
      icono: "assets/aimtrainer.svg"
    },
    {
      name: 'Number Memory',
      router: 'numbermemory',
      text: '¿Cuántas cifras puedes memorizar?',
      icono: "assets/numbermemory.svg"
    },
    {
      name: 'Reaction Time',
      router: 'reactiontime',
      text: 'Midamos tu velocidad de reacción',
      icono: "assets/reactionbutton.svg"
    },
  ];
}
