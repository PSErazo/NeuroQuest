import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnChanges {

  @Input() public timerStart: boolean = false;
  @Input() public timerStop: boolean = false;
  @Input() public microSecOn: boolean = false;
  @Input() public microSecOff: boolean = false;
  @Input() public timerMinSec: boolean = false;


  @Output() timerEvent = new EventEmitter<string>();
  
  mandarScore(){


    this.timerEvent.emit(this.tiempoScore);
  }
  totalTime = 0;      
  interval: any;
  tiempoScore: string = "";

  ngOnChanges(changes: SimpleChanges): void {


    if (changes['microSecOn']) {
      if (this.microSecOn){
        this.setMicroSecOn();
      }
    }
    if (changes['microSecOff']) {
      if (this.microSecOff){
        this.setMicroSecOff();
      }
    }
    if (changes['timerMinSec']) {
      if (this.timerMinSec){
        this.setTimerMinSec();
      }
    }
  }

  startTimeReact: number = 0;

  setMicroSecOn(): void {
    clearInterval(this.interval);
    this.totalTime = 0;
    this.startTimeReact = performance.now();
    this.interval = window.setInterval(this.increaseMicroTime.bind(this), 1);
  }

  setMicroSecOff(): void {
    this.mandarScore()
     clearInterval(this.interval);
     this.totalTime = 0;
     this.setMicroTime("0")
   }

   increaseMicroTime(): void {
    const currentTime = performance.now();
    this.totalTime = Math.floor(currentTime - this.startTimeReact);
    this.setMicroTime(`${this.totalTime}`);
    console.log(this.totalTime)

    if(this.showTimer) {
      
    const minutes = Math.floor(this.totalTime / 60000);
    const seconds = Math.floor((this.totalTime % 60000) / 1000);

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();
  
      this.setTime(`${formattedMinutes}:${formattedSeconds}`);
    }

  }

   // Contador en minutos y segundos

  showTimer: boolean = false

   setTimerMinSec(): void {

    this.showTimer = true
    
  }

  setTime(time: string): void {
    let timer: HTMLElement | null = document.querySelector(".timer");
    timer!.innerHTML = "TIEMPO: " + time;
  }

  // Mostrar Score

  setMicroTime(time: string): void {
    this.tiempoScore = `TIEMPO ${time} ms`;
  }

}
