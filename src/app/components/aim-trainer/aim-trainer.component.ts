import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimerComponent } from '../../shared/timer/timer.component';
import { StartgameComponent } from '../../shared/startgame/startgame.component';

@Component({
  selector: 'aim-trainer-game',
  standalone: true,
  imports: [CommonModule, TimerComponent,StartgameComponent],
  templateUrl:'./aim-trainer.component.html',
  styleUrl: './aim-trainer.component.css',
})

export class AimTrainerComponent {

  timerState: boolean = true;
  hits: number = 30;
  interval: any;
  name:string = "Aim Trainer";
  text:string = "Clickea los 30 objetivos en el menos tiempo posible";
  estadoComponente:boolean = false;
  ngOnInit(): void {
 
  }


  startGame(){
       this.createRandomCircle();
  }

  receivingState(estate:boolean):void{
    if (estate) {
      this.estadoComponente = estate
      this.startGame();
    }
  }



  createRandomCircle(): void {    

    let circle: HTMLElement | null = document.querySelector(".circle");
    let containerCircle: HTMLElement | null = document.querySelector('.container-circles');

    const size = 75;
    const { width, height } = containerCircle!.getBoundingClientRect();
    const x = this.getRandomNumber(0, width - size);
    const y = this.getRandomNumber(0, height - size);

    circle!.style.top = `${y}px`;
    circle!.style.left = `${x}px`;
  }

  validateClick(event: MouseEvent) {
    let target = event.target as HTMLElement;

    let circle: HTMLElement | null = document.querySelector(".circle");
    let hits: HTMLElement | null = document.querySelector(".hits");

    this.createRandomCircle();

    if (target.classList.contains('circle')) {
      this.hits--;
    }

    hits!.innerHTML = this.hits.toString();

    if (this.hits === 0) {
      this.stopTimer();
      let circle: HTMLElement | null = document.querySelector(".circle");
      circle!.style.display = "none"; 
      console.log("DETENIDO");
    }
  }

  

  stopTimer(): void {
    this.timerState = false;
  }
  
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}