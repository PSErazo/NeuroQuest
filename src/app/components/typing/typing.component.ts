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
  //texto separado por palabras
  words: string[] = "i dont wanna wait come take it".split(" ")
  wordsCount: number = this.words.length
  correctas: number = 0
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


  addClass(el: HTMLElement, name: string) {
    el.className += ' ' + name
  }

  removeClass(el: HTMLElement, name: string) {
    el.className = el.className.replace(name, ' ')
  }
  //generador de palabras 
  randomWord() {
    const randomIndex = Math.floor(Math.random() * this.wordsCount)
    return this.words[randomIndex]
  }
  //cada palabra generada
  formatWord(word: string) {
    return `<div class="word inline-block ml-3"><span class="letter quit">${word.split("").join('</span><span class="letter quit">')}</span></div>`
  }
  newGame() {
    setTimeout(() => {
      let words = document.getElementById('words')

      if (words) {
        words.innerHTML = ''
      }

      //se imprimen 200 palabras
      for (let i = 0; i < 100; i++) {
        if (words) {
          words.innerHTML += this.formatWord(this.randomWord())
        }
      }

      let classWord = document.querySelector('.word') as HTMLElement
      let classLetter = document.querySelector('.letter') as HTMLElement

      if (classWord) {
        this.addClass(classWord, 'current')
      }

      if (classLetter) {
        this.addClass(classLetter, 'current')
      }

      const gameContainer = document.querySelector('.game') as HTMLElement;

      gameContainer.addEventListener('keydown', (e: KeyboardEvent) => {
        
        e.preventDefault()
        const key = e.key
        console.log("se presiono una tecla" + key)
        const currentWord = document.querySelector('.word.current') as HTMLElement;
        const currentLetter = document.querySelector('.letter.current') as HTMLElement;
        const expected = currentLetter?.innerHTML || ' '

        const isLetter = key.length === 1 && key !== ' '
        const space = " "

        if (isLetter) {
          if (currentLetter) {
            if (key === expected) {
              this.correctas++
            }
            this.addClass(currentLetter, key === expected ? 'text-[#00d288]' : 'text-[#c65956]')
            this.removeClass(currentLetter, 'quit')
            this.removeClass(currentLetter, 'current')
            if (currentLetter.nextSibling) {
              const nextLetter = currentLetter.nextElementSibling as HTMLElement;
              this.addClass(nextLetter, 'current')
            }
          }
        }

        if (key === space) {

          if (expected !== ' ') {
            const nodeList: NodeListOf<Element> = document.querySelectorAll('.word.current .letter.quit');
            console.log(nodeList)
            const elementsArray: HTMLElement[] = Array.from(nodeList) as HTMLElement[];

            elementsArray.forEach(letter => {
              this.addClass(letter, 'text-[#c65956]')
            })
          }

          if (currentWord.nextElementSibling) {
            const nextWord = currentWord.nextElementSibling as HTMLElement;
            this.removeClass(currentWord, 'current')
            this.addClass(nextWord, 'current')
            if (currentLetter) {

              this.removeClass(currentLetter, 'current')

            }
            const firstChild = nextWord && nextWord.firstElementChild;
            if (firstChild instanceof HTMLElement) {
              this.addClass(firstChild, 'current');
            }
          } else {
            this.score = String(this.correctas)
            this.estadoComponente = false
            this.pantallaInicial = false
            this.restartGame()
          }
        }
      })
    },)
  }

  restartGame() {
    this.correctas = 0
    this.newGame()
  }
}