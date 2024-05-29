import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { ButtonComponent } from './shared/buttons/button.component';
import { SequenceComponent } from './components/sequence/sequence.component';
import { CommonModule } from '@angular/common';

interface games {
  name: string;
  router: string;
  text: string
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
      text: '¿Eres capaz de recordar el patron?',
      
    },
    {
      name: 'Visual Memory',
      router: '/visualmemory',
      text: 'Solo un cerebro como el mío puede memorizar tanto',
    },
    {
      name: 'Typing',
      router: '/typing',
      text: '¿Eres rápido con los dedos? Demuestralo!',
    },
    {
      name: 'Aim Trainer',
      router: '/aimtrainer',
      text: '¿Que tán preciso y rápido eres?',
    },
    {
      name: 'Number Memory',
      router: '/numbermemory',
      text: '¿Cuántas cifras puedes memorizar?',
    },
    {
      name: 'Reaction Time',
      router: '/reactiontime',
      text: 'Midamos tu velocidad de reacción',
    },


  ];
}
