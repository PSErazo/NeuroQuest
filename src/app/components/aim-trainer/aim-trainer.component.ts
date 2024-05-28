import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimerComponent } from '../../shared/timer/timer.component';

@Component({
  selector: 'aim-trainer-game',
  standalone: true,
  imports: [CommonModule, TimerComponent],
  templateUrl: './aim-trainer.component.html',
  styleUrl: './aim-trainer.component.css',
})

export class AimTrainerComponent {

  timerState: boolean = false;
  hits: number = 30;
  interval: any;
  

  ngOnInit(): void {
    this.createRandomCircle()
    this.startTimer();
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

  startTimer(): void {
    this.timerState = true;
  }

  stopTimer(): void {
    this.timerState = false;
  }
  
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}