import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StartgameComponent } from '../../shared/startgame/startgame.component';

@Component({
  selector: 'app-number-memory',
  standalone: true,
  imports: [CommonModule, StartgameComponent],
  templateUrl: './number-memory.component.html',
  styleUrl: './number-memory.component.css',
})
export class NumberMemoryComponent {
  pantallaInicial: boolean = true;
  answerNumber: number = 0;
  levelScore: number = 1;
  name:string = "Number Memory"
  text:string = "Recuerda todos los numeros que se mostraran";
  estadoComponente:boolean = false;

  ngOnInit(): void {

  }

  startGame(){
    this.levelScore = 1;
    this.timerLineProcedure();
    this.nextLevel();
    this.nextScreenAnswer();
   }

  receivingState(estate:boolean):void{
    if (estate) {
      this.estadoComponente = estate
      this.startGame();
    }
  }
  
  timerLineProcedure(): void {
    setTimeout(() => {
    let timerLine: HTMLElement | null = document.querySelector(`.timerLine`);
    timerLine!.style.width = "0px";
    }, );
  }

  generateRandomNumber(digits: number): number {
    const minNumber = Math.pow(10, digits - 1);
    const maxNumber = Math.pow(10, digits) - 1;

    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }

  nextLevel(): void {
    setTimeout(() => {
      this.answerNumber = this.generateRandomNumber(this.levelScore);
      let numberAnswer: HTMLElement | null = document.querySelector(`.number-main`);
      numberAnswer!.textContent = this.answerNumber.toString();
  }, );
  }

  nextScreenAnswer(): void{
    setTimeout(() => {
      let screen1: HTMLElement | null = document.querySelector(`.screen-1`);
      screen1!.style.display = "none";
      let screen2: HTMLElement | null = document.querySelector(`.screen-2`);
      screen2!.style.display = "block";
      
      let numberAns: HTMLElement | null = document.querySelector(`.number-main`);
      numberAns!.innerText = "Sapo???";
    }, 2000);
  }

  validateNumber(event: MouseEvent) {
    let answerInput = document.getElementById('answer-input') as HTMLInputElement;
    const userAnswer = parseInt(answerInput.value);
    const correctAnswer = parseInt(this.answerNumber.toString());
    if(correctAnswer === userAnswer) {
      this.levelScore++;
      this.nextScreenLevel();
      answerInput.value = ''
      console.log("correcto")
    }else{
      this.estadoComponente = false;
      this.pantallaInicial = false;
      answerInput.value = ''
      console.log("incorrecto")
    }
  }

  nextScreenLevel(): void{
    let screen1: HTMLElement | null = document.querySelector(`.screen-1`);
    screen1!.style.display = "block";
    let screen2: HTMLElement | null = document.querySelector(`.screen-2`);
    screen2!.style.display = "none";

    this.nextLevel();
    let timerLine: HTMLElement | null = document.querySelector(`.timerLine`);
    timerLine!.style.width = "100px";
    this.timerLineProcedure();

    this.nextScreenAnswer();
  }

}