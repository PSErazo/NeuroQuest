import { Component } from '@angular/core';

@Component({
  selector: 'app-number-memory',
  standalone: true,
  imports: [],
  templateUrl: './number-memory.component.html',
  styleUrl: './number-memory.component.css',
})
export class NumberMemoryComponent {
  level = 1;
  numberToRemember: number = 0;

  ngOnInit() {
    if (typeof document !== 'undefined') {
      document.getElementById('start-button')!.addEventListener('click', () => {
        this.transitionScreens('start-screen', 'number-screen');
        this.displayNumber();
      });

      const submitHandler = () => {
        const userInput = (
          document.getElementById('user-input') as HTMLInputElement
        ).value;
        document.getElementById('correct-number')!.textContent =
          this.numberToRemember.toString();
        document.getElementById('user-answer')!.textContent = userInput;
        document.getElementById('current-level')!.textContent =
          this.level.toString();

        this.transitionScreens('input-screen', 'result-screen');

        if (userInput === this.numberToRemember.toString()) {
          document.getElementById('next-level-button')!.style.display = 'block';
          this.level++;
        } else {
          document.getElementById('next-level-button')!.style.display = 'none';
          this.level = 1;
        }

        (document.getElementById('user-input') as HTMLInputElement).value = '';
      };

      document
        .getElementById('submit-button')!
        .addEventListener('click', submitHandler);

      // Escucha el evento keypress en el campo de entrada
      document
        .getElementById('user-input')!
        .addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
            submitHandler();
          }
        });

      document
        .getElementById('try-again-button')!
        .addEventListener('click', () => {
          this.level = 1;
          this.transitionScreens('result-screen', 'start-screen');
        });

      document
        .getElementById('next-level-button')!
        .addEventListener('click', () => {
          document.getElementById('current-level')!.textContent =
            this.level.toString();
          this.transitionScreens('result-screen', 'number-screen');
          this.displayNumber();
        });
    }
  }

  displayNumber() {
    const digits = Math.min(this.level, 9); // Máximo de 9 dígitos
    const maxNumber = Math.pow(10, digits) - 1;
    const minNumber = Math.pow(10, digits - 1);
    this.numberToRemember =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    if (typeof document !== 'undefined') {
      document.getElementById('number-display')!.textContent =
        this.numberToRemember.toString();
    }
    this.initiateTimer(5); // 5 segundos para memorizar el número
  }

  initiateTimer(duration: number) {
    if (typeof document !== 'undefined') {
      console.log('initialTimer');
      let timerElement = document.getElementById('timer-progress');
      if (!timerElement) {
        console.log('initialTimer antes de crearse');
        this.createProgressElement();
        timerElement = document.getElementById('timer-progress');
      }
      if (timerElement) {
        timerElement.style.width = '100%';
      }
      let timeLeft = duration;

      const countdown = setInterval(() => {
        timeLeft--;
        let progress = (timeLeft / duration) * 100;
        if (timerElement) {
          timerElement.style.width = progress + '%';
        }

        if (timeLeft === 0) {
          clearInterval(countdown);
          this.transitionScreens('number-screen', 'input-screen');
        }
      }, 1000);
    }
  }

  createProgressElement() {
    console.log('creando el element progress');

    if (typeof document !== 'undefined') {
      console.log('creando el element progress dentro del if');
      const progressContainer = document.createElement('div');
      progressContainer.className = 'progress';
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.id = 'timer-progress';
      progressBar.style.width = '100%';
      progressContainer.appendChild(progressBar);
      document.getElementById('number-screen')!.appendChild(progressContainer);
    }
  }

  transitionScreens(hideId: string, showId: string) {
    if (typeof document !== 'undefined') {
      document.getElementById(hideId)!.style.display = 'none';
      document.getElementById(showId)!.style.display = 'block';
    }
  }
}
