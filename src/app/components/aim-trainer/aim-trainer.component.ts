import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'aim-trainer-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aim-trainer.component.html',
  styleUrl: './aim-trainer.component.css',
})
export class AimTrainerComponent {
  startBtn!: HTMLButtonElement;
  screens!: NodeListOf<HTMLElement>;
  timeEl!: HTMLElement;
  board!: HTMLElement;
  hitsEl!: HTMLElement;
  timeOver!: HTMLElement;
  perSecondOver!: HTMLElement;
  restartBtn!: HTMLButtonElement;

  playing = false;
  interval!: number;
  totalTime = 0;
  hits = 30;

  ngAfterViewInit() {
    this.startBtn = document.querySelector('#start') as HTMLButtonElement;
    this.screens = document.querySelectorAll(
      '.screen'
    ) as NodeListOf<HTMLElement>;
    this.timeEl = document.querySelector('#time') as HTMLElement;
    this.board = document.querySelector('#board') as HTMLElement;
    this.hitsEl = document.querySelector('#hits') as HTMLElement;
    this.timeOver = document.querySelector('#time-over') as HTMLElement;
    this.perSecondOver = document.querySelector(
      '#persecond-over'
    ) as HTMLElement;
    this.restartBtn = document.querySelector('.restart') as HTMLButtonElement;

    this.startBtn.addEventListener('click', () => {
      this.screens[0].classList.add('up');
      this.startGame();
    });

    this.restartBtn.addEventListener('click', this.restartGame.bind(this));
  }

  startGame(): void {
    this.playing = true;
    this.interval = window.setInterval(this.increaseTime.bind(this), 1000);
    this.createRandomCircle();
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
    this.timeEl.innerHTML = time;
  }

  createRandomCircle(): void {
    if (!this.playing) {
      return;
    }

    const circle = document.createElement('div');
    const size = 75;
    const { width, height } = this.board.getBoundingClientRect();
    const x = this.getRandomNumber(0, width - size);
    const y = this.getRandomNumber(0, height - size);
    circle.classList.add('circle');

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    this.board.append(circle);

    console.log('Se formó el circulo');

    /* Evento que remueve el circulo al dar click */
    circle.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      circle.remove();
      this.createRandomCircle();

      if (target.classList.contains('circle')) {
        this.hits--;

        target.remove();
      }

      this.hitsEl.innerHTML = this.hits.toString();

      if (this.hits === 0) {
        this.finishGame();
      }
    });
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  finishGame(): void {
    this.playing = false;

    this.board.innerHTML = '';
    this.screens[1].classList.add('up');
    this.timeEl.innerHTML = '00:00';
    this.hitsEl.innerHTML = '30';

    const minutesFinish = Math.floor(this.totalTime / 60);
    const secondsFinish = this.totalTime % 60;

    const totalTimeInSeconds = minutesFinish * 60 + secondsFinish;
    const averageTimePerClick = (totalTimeInSeconds / 30) * 10;

    const formattedMinutes =
      minutesFinish < 10 ? '0' + minutesFinish : minutesFinish.toString();
    const formattedSeconds =
      secondsFinish < 10 ? '0' + secondsFinish : secondsFinish.toString();

    this.timeOver.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
    this.perSecondOver.innerHTML = averageTimePerClick.toFixed(3);

    clearInterval(this.interval);
  }

  restartGame(): void {
    this.finishGame();
    this.screens[1].classList.remove('up');
    this.screens[0].classList.remove('up');
    this.totalTime = 0;
    this.hits = 30;
    this.playing = false;
  }
}
