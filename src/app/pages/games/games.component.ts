import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../shared/buttons/button.component';
import { Game } from '../../shared/interfaces/Game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'pages-game',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent],
  templateUrl: './games.component.html',
})
export default class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      localStorage.setItem('games', JSON.stringify(games));
      this.games = games;
    });
  }

  //  pepeito pelotes clavito clavores

  // games: Game[] = [
  //   {
  //     name: 'Sequence Memory',
  //     router: 'sequencememory',
  //     text: '¿Eres capaz de recordar el patron?',
  //     icon: 'assets/sequencebutton.svg',
  //   },
  //   {
  //     name: 'Visual Memory',
  //     router: 'visualmemory',
  //     text: 'Solo un cerebro como el mío puede memorizar tanto',
  //     icon: 'assets/sequencebutton.svg',
  //   },
  //   {
  //     name: 'Typing',
  //     router: 'typing',
  //     text: '¿Eres rápido con los dedos? Demuestralo!',
  //     icon: 'assets/typing.svg',
  //   },
  //   {
  //     name: 'Aim Trainer',
  //     router: 'aimtrainer',
  //     text: '¿Que tán preciso y rápido eres?',
  //     icon: 'assets/aimtrainer.svg',
  //   },
  //   {
  //     name: 'Number Memory',
  //     router: 'numbermemory',
  //     text: '¿Cuántas cifras puedes memorizar?',
  //     icon: 'assets/numbermemory.svg',
  //   },
  //   {
  //     name: 'Reaction Time',
  //     router: 'reactiontime',
  //     text: 'Midamos tu velocidad de reacción',
  //     icon: 'assets/reactionbutton.svg',
  //   },
  // ];
}
