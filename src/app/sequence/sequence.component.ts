import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LevelComponent } from '../shared/level/level.component';

@Component({
  selector: 'sequence-game',
  standalone: true,
  imports: [CommonModule, LevelComponent],
  templateUrl: './sequence.component.html',
})
export class SequenceComponent implements OnInit {
  quadrates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  randomCorrect: number[] = [];

  level: number = 0;

  indentificador: number = 1;

  ngOnInit(): void {
    // this.runCards(this.randomCorrect);
  }

  levelUp() {
    this.level++;
    //generar random correct
    this.randomCorrect.push(
      this.generateRandom(this.randomCorrect[this.randomCorrect.length - 1])
    );
    this.preview([...this.randomCorrect]);
    // this.viewCorrect();
    console.log(this.randomCorrect);
  }

  generateRandom(numberBefore: number): number {
    let x = Math.floor(Math.random() * 9 + 1);
    if (numberBefore == x) {
      console.log('entro al if', x);
      return this.generateRandom(numberBefore);
    }
    numberBefore = x;
    console.log('generateRandom p asando if', x);
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
        this.habilitar(arrayNumber[i] - 1);
        habilitado = true;
      } else if (habilitado) {
        this.deshabilitar(arrayNumber[i] - 1);
        habilitado = false;
        i++;
      }
    }, 500);
  }
  habilitar(card: number) {
    document.getElementsByClassName('quadrate')[card].classList.add('bg-white');
    return;
  }
  deshabilitar(card: number) {
    document
      .getElementsByClassName('quadrate')
      [card].classList.remove('bg-white');
    return;
  }
}
