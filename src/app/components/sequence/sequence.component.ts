import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LevelComponent } from '../../shared/level/level.component';
import { LifesComponent } from '../../shared/lifes/lifes.component';
import { StartgameComponent } from '../../shared/startgame/startgame.component';
import { query } from '@angular/animations';

@Component({
  selector: 'sequence-game',
  standalone: true,
  imports: [CommonModule, LevelComponent,LifesComponent,StartgameComponent],
  templateUrl: './sequence.component.html',
  styleUrl: './sequence.component.css',
})
export class SequenceComponent implements OnInit {
  quadrates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  estadoComponente: boolean = false;
  icono:string = "assets/sequence.svg";
  randomCorrect: number[] = [];
  name:string = "Sequence Memory";
  text:string = "Memoriza la secuencia";
  level: number = 0;
  id: number = 0;
  hearts:number = 3
  pantallaInicial: boolean = true;
  levelScore:string = "";
  lifes:number = 3;
  ngOnInit(): void {
    
  }

  receivingState(estate:boolean):void{
    if(estate){
      this.estadoComponente = estate;
      this.startGame();
    }
  }


  startGame(){
    this.levelUp();
  }

  restarGame() {
    this.levelScore = `Level ${this.level}`
    this.level = 0;
    this.id = 0;
    this.randomCorrect = [];
    this.hearts = 3
    for (let i = 0; i < this.hearts; i++) {
      let life: HTMLElement = document.querySelectorAll('.fa-solid')[
        i
      ] as HTMLElement;
      life.style.color = '#ffffff';
    }
    this.estadoComponente = false;
    this.pantallaInicial = false
   // this.levelUp();
  }

  levelUp() {
    this.level++;
    this.id = 0;
    //generar random correct
    this.randomCorrect.push(
      this.generateRandom(this.randomCorrect[this.randomCorrect.length - 1])
    );
    this.preview([...this.randomCorrect]);
    console.log(this.randomCorrect);
  }

  generateRandom(numberBefore: number): number {
    let x = Math.floor(Math.random() * 9 + 1);
    if (numberBefore == x) {
      console.log('entro al if', x);
      return this.generateRandom(numberBefore);
    }
    numberBefore = x;
    console.log('generateRandom pasando if', x);
    return x;
  }

  preview(arrayNumber: number[]) {
    console.log('entrando a repetir con', arrayNumber);
    let i = 0;
    let habilitado = false;
    let x = setInterval(() => {
      if (i === arrayNumber.length) {
        clearInterval(x);
        return;
      }
      if (!habilitado) {
        this.habilitar(arrayNumber[i] - 1, 'fadeIn');
        habilitado = true;
      } else if (habilitado) {
        this.deshabilitar(arrayNumber[i] - 1, 'fadeIn');
        i++;
        if (i === arrayNumber.length) {
          clearInterval(x);
          return;
        } else {
          this.habilitar(arrayNumber[i] - 1, 'fadeIn');
        }
      }
    }, 300);
  }

  habilitar(card: number, style: string) {
    document.getElementsByClassName('quadrate')[card].classList.add(style);
    return;
  }

  deshabilitar(card: number, style: string) {
    document.getElementsByClassName('quadrate')[card].classList.remove(style);
    return;
  }

  validateClick(quadrate: number) {
    let correct: boolean =
      quadrate == this.randomCorrect[this.id] ? true : false;
    console.log('correct', correct);
    if (correct) {
      this.habilitar(quadrate - 1, 'fadeIn');
      setTimeout(() => {
        this.deshabilitar(quadrate - 1, 'fadeIn');
      }, 300);
      this.id++;
      if (this.id == this.randomCorrect.length) {
        this.levelUp();
        return;
      }
    } else {
      this.habilitar(quadrate - 1, 'fadeInError');
      setTimeout(() => {
        this.deshabilitar(quadrate - 1, 'fadeInError');
      }, 300);
      console.log('error');
      this.hearts--;
      console.log(`vidas actuales:${this.hearts}`)
      let life: HTMLElement = document.querySelectorAll('.fa-solid')[this.hearts] as HTMLElement;
      life.style.color = '#FAA7A5'

      if (this.hearts < 1) {

       
        
        
       this.restarGame();
      }
    }
    console.log('validateClick', quadrate);
  }



}
