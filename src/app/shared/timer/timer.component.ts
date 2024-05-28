import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnChanges {

  @Input() public timerState: boolean = false;

  totalTime = 0;
  interval: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timerState']) {
      if (this.timerState) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  startTimer(): void {
    this.interval = window.setInterval(this.increaseTime.bind(this), 1000);
  }

  stopTimer(): void {
    clearInterval(this.interval);
    console.log("Temporizador detenido");
  }

  increaseTime(): void {
    
    this.totalTime++;
    
    const minutes = Math.floor(this.totalTime / 60);
    const seconds = this.totalTime % 60;

    // Formateamos los minutos y segundos con ceros a la izquierda si son menores que 10
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();

    this.setTime(`${formattedMinutes}:${formattedSeconds}`);
  }

  setTime(time: string): void {
    let timer: HTMLElement | null = document.querySelector(".timer");
    timer!.innerHTML = "TIEMPO: " + time;
  }
}
