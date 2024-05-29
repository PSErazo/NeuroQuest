import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StartgameComponent } from '../../shared/startgame/startgame.component';

@Component({
  selector: 'app-reaction-time',
  standalone: true,
  imports: [StartgameComponent],
  templateUrl: './reaction-time.component.html',
  styleUrl: './reaction-time.component.css',
})
export class ReactionTimeComponent implements OnInit {
  box: HTMLElement | null = null;
  result: HTMLElement | null = null;
  boxText: HTMLElement | null = null;
  startTime: number = 0; // Inicializar con un valor predeterminado
  endTime: number = 0; // Inicializar con un valor predeterminado
  estadoComponente: boolean = false;
  name:string = "Reaction Time";
  text:string="Cuando la pantalla cambie a verde, dale click en cualquier parte del cuadro"
  constructor() {}

  ngOnInit() {
   
  }

  initGame(){
    this.startGame();
  }

  receivingState(estate:boolean):void{
    if (estate) {
      this.estadoComponente = estate
      this.initGame();
    }
  }
  

  startGame() {
    this.box = document.getElementById('box') as HTMLElement;
    this.result = document.getElementById('result') as HTMLElement;
    this.boxText = document.getElementById('boxText') as HTMLElement;

    if (this.box) {
      this.box.addEventListener('click', () => {
        if (this.box && this.box.style.backgroundColor === 'green') {
          this.endTime = new Date().getTime();
          let reactionTime = this.endTime - this.startTime;
          if (this.result && this.boxText) {
            this.result.textContent = `Tu tiempo de reacción es: ${reactionTime} ms`;
            this.box.style.backgroundColor = 'red';
            this.boxText.textContent = 'Espera el verde...';
            this.result.textContent +=
              ' Haz clic en "Empezar de nuevo" para reiniciar.';
          }
        }
      });
    }

    this.resetGame();
  }

  resetGame() {
    if (this.box && this.boxText && this.result) {
      this.box.style.backgroundColor = 'red';
      this.boxText.textContent = 'Espera el verde...';
      this.result.textContent = '';
      setTimeout(() => {
        if (this.box && this.boxText) {
          this.box.style.backgroundColor = 'green';
          this.boxText.textContent = '¡Haz clic ahora!';
          this.startTime = new Date().getTime();
        }
      }, Math.random() * 2000 + 1000); // Entre 1 y 3 segundos aleatoriamente
    }
  }
}
