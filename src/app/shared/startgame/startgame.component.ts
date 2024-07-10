import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { ScoreGame } from '../interfaces/Game';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-startgame',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './startgame.component.html',
  styleUrl: './startgame.component.css',
})
export class StartgameComponent {
  @Input() public name: string = "";
  @Input() public text: string = "";
  @Input() public levelScore?: string
  @Input() public levelScoreN?: number
  @Input() public pantallaInicial: boolean = false;
  saved: boolean = false;
    //Se instancia el eventEmitter que emitera un evento con un string
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(private gameService: GamesService){

  }
  cambiarEstado(){
    //el metodo emit sirve para enviar eventos
    this.messageEvent.emit(true)
  }

  saveScore(){
    console.log(' entre a saveScore');

    if(!localStorage.getItem('token'))return;
    let scoreGame: ScoreGame = {
      email : JSON.parse(localStorage.getItem('user')!).email ?? 'email@gmail.com',
      game: this.name,
      score: this.levelScore? parseInt(this.levelScore.split(' ')[1]) : this.levelScoreN !
    }
    console.log(scoreGame)
    this.gameService.saveScore(scoreGame)?.subscribe( data =>{
      console.log(data);
      this.saved = true

    })

  }

}
