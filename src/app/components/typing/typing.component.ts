import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StartgameComponent } from '../../shared/startgame/startgame.component';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [CommonModule, FormsModule, StartgameComponent],
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.css',
})

export class TypingComponent {
  textoPredefinido: string = '';
  textoUsuario: string = '';
  resultado: string = '';
  tiempo: string = '';
  startTime!: number;
  endTime!: number;
  pantallaInicial: boolean = true;
  name: string = "Typing";
  text: string = "Cuantas palabras por minuto puedes tipear?"
  estadoComponente: boolean = false;

  paragraphs: string[] = [
    "The quick brown fox jumps over the lazy dog",
    "She sells sea shells by the sea shore",
    "A journey of a thousand miles begins with a single step",
    "To be or not to be, that is the question",
    "All that glitters is not gold"
  ];

  correctas: number = 0
  incorrectas: number = 0
  score: string = ""

  startGame() {
    this.newGame()
  }

  receivingState(estate: boolean): void {
    if (estate) {
      this.estadoComponente = estate
      this.startGame();
    }
  }

  private currentParagraph: string = "";
  private userInput: string = "";

  constructor() {}

  newGame() {
    setTimeout(() => {
      let paragraphsElement = document.getElementById("paragraphs");
      if (paragraphsElement) {
        this.currentParagraph = this.getRandomParagraph();
        paragraphsElement.innerHTML = this.formatParagraphs(this.currentParagraph);
      }

      let classParagraph = document.querySelector(".paragraph") as HTMLElement;
      let classLetter = document.querySelector(".letter") as HTMLElement;

      if (classParagraph) {
        this.addClass(classParagraph, "current");
      }

      if (classLetter) {
        this.addClass(classLetter, "current");
      }

      const gameContainer = document.querySelector(".game") as HTMLElement;
      gameContainer.addEventListener("keydown", (e: KeyboardEvent) => {
        e.preventDefault();
        this.handleTyping(e);
      });
    });
  }

  private getRandomParagraph(): string {
    const randomIndex = Math.floor(Math.random() * this.paragraphs.length);
    return this.paragraphs[randomIndex];
  }

  private formatParagraphs(paragraph: string): string {
    return paragraph
      .split("")
      .map((char, index) => `<span id="char-${index}" class="letter">${char}</span>`)
      .join("");
  }

  private handleTyping(event: KeyboardEvent) {
    const key = event.key;
    const currentLetter = document.querySelector(".letter.current") as HTMLElement;
    const expected = currentLetter?.innerHTML || " ";

    if (key.length === 1 || key === " ") {
      if (currentLetter) {
        if (key === expected) {
          this.addClass(currentLetter, "text-[#00d288]");
          this.correctas++;
        } else {
          this.addClass(currentLetter, "text-[#c65956]");
          this.incorrectas++;
        }
        this.removeClass(currentLetter, "current");
        if (currentLetter.nextSibling) {
          const nextLetter = currentLetter.nextElementSibling as HTMLElement;
          this.addClass(nextLetter, "current");
        } else {
          this.endGame();
        }
      }
    }
  }

  private endGame() {
    this.score = `Correctas: ${this.correctas}, Incorrectas: ${this.incorrectas}`;
    this.estadoComponente = false;
    this.pantallaInicial = false;
    this.restartGame();
  }

  private addClass(element: HTMLElement, className: string) {
    element.classList.add(className);
  }

  private removeClass(element: HTMLElement, className: string) {
    element.classList.remove(className);
  }

  restartGame() {
    this.correctas = 0
    this.incorrectas = 0
    this.newGame()
  }
}