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


  @Output() timerEvent = new EventEmitter<string>();
  
  mandarScore(){


    this.timerEvent.emit(this.tiempoScore);
  }
  totalTime = 0;      
  interval: any;
  tiempoScore: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['timerStart']) {
      if (this.timerStart){
        console.log(`SE CAMBIO A TRUE`)
        this.startTimer();
      }
    }
    if(changes['timerStop']){
      if (this.timerStop){
        console.log(`SE CAMBIO A FALSE`)
        this.stopTimer();
      }
    }

    // Reaction Time

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
  }
 

  startTimer(): void {
    clearInterval(this.interval);
    this.interval = window.setInterval(this.increaseTime.bind(this), 1000);
  }

  stopTimer(): void {
   console.log(`${this.tiempoScore}`)
   this.mandarScore()
    clearInterval(this.interval);
    this.totalTime = 0;
    this.setTime("00:00")
  
  
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
    this.tiempoScore = `TIEMPO ${time}`;
  }

  // Para el componente Reaction Time / trabajar con microsegundos

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
  }

  setMicroTime(time: string): void {
    this.tiempoScore = `TIEMPO ${time} ms`;
  }

}
