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
  }
 

  startTimer(): void {
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
}
