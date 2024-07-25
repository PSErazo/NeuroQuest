import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScoreService } from '../../services/score.service';
import { ScoreGame } from '../interfaces/ScoreGame';

@Component({
  selector: 'app-startgame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './startgame.component.html',
  styleUrl: './startgame.component.css',
})
export class StartgameComponent {
  @Input() public name: string = '';
  @Input() public text: string = '';
  @Input() public levelScore?: string;
  @Input() public levelScoreN?: number;
  @Input() public pantallaInicial: boolean = false;

  saved: boolean = localStorage.getItem('token') ? false : true;
  //Se instancia el eventEmitter que emitera un evento con un string
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private scoreService: ScoreService) {}

  cambiarEstado() {
    //el metodo emit sirve para enviar eventos
    this.messageEvent.emit(true);
  }

  saveScore() {
    //   console.log(' entre a saveScore');
    //   if (!localStorage.getItem('token')) return;
    //   let games = JSON.parse(localStorage.getItem('games')!);
    //   let gameCode = games.filter)
    //   console.log(games);
    //   let scoreGame: ScoreGame = {
    //     game: this.name,
    //     score: this.levelScore
    //       ? parseInt(this.levelScore.split(' ')[1])
    //       : this.levelScoreN!,
    //   };
    //   console.log(scoreGame);
    //   this.scoreService.saveScore(scoreGame)?.subscribe((data) => {
    //     console.log(data);
    //     this.saved = true;
    //   });
  }
}
