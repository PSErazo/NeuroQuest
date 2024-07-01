import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StartgameComponent } from '../../shared/startgame/startgame.component';
import { TimerComponent } from '../../shared/timer/timer.component';

@Component({
  selector: 'app-reaction-time',
  standalone: true,
  imports: [StartgameComponent, TimerComponent, CommonModule],
  templateUrl: './reaction-time.component.html',
  styleUrl: './reaction-time.component.css',
})
export class ReactionTimeComponent implements OnInit {

  timeValueChange: number = 0;
  microSecOn: boolean = false;
  microSecOff : boolean = false;
  interval: any;
  timerScore: string = "";
  estadoComponente: boolean = false;
  name:string = "Reaction Time";
  text:string="Cuando la pantalla cambie a verde, dale click en cualquier parte del cuadro"
  icono:string = "assets/prueba.svg";
  constructor() {}

  ngOnInit() {
   
  }

  receivingTimer(timer:string):void{
    this.timerScore = timer
}

  startGame() {
    this.microSecOn = false
    this.microSecOff = false
    this.nextScreenClick();
  }

  receivingState(estate:boolean):void{
    if (estate) {
      this.estadoComponente = estate
      this.startGame();
    }
  }
  
  timeForChange() {
    const minNumber = 2;
    const maxNumber = 5;
    this.timeValueChange = (Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber) * 1000;
  }

  nextScreenClick(): void{
    this.timeForChange();
    setTimeout(() => {
      let screen1: HTMLElement | null = document.querySelector(`.screen-1`);
      screen1!.style.display = "none";
      let screen2: HTMLElement | null = document.querySelector(`.screen-2`);
      screen2!.style.display = "flex";
      this.microSecOn = true;
    }, this.timeValueChange);
  }

  stopTimeClick(event: MouseEvent){
    this.microSecOff = true;
    setTimeout(() => {
      this.mostrarScore()
      }, 1);
    
  }

  mostrarScore(){
    if(this.microSecOff){
       this.estadoComponente = false;
    }
   }
}
