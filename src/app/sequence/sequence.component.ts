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
  numberBefore: number = 0;

  indentificador: number = 1;
  identificadorIntervalo: any;

  ngOnInit(): void {
    // this.runCards(this.randomCorrect);
  }

  generateLevel() {
    this.level++;
    this.randomCorrect.push(this.generateRandom());
    this.repetir();
    // this.viewCorrect();
    console.log(this.randomCorrect);
  }

  generateRandom(): number {
    let x = Math.floor(Math.random() * 9 + 1);

    if (this.numberBefore == x) {
      console.log('entro al if', x);
      return this.generateRandom();
    }
    this.numberBefore = x;
    console.log('generateRandom p asando if', x);
    return x;
  }

  repetir() {
    console.log('entrando a repetir', this.randomCorrect);

    this.identificadorIntervalo = setInterval(this.abrirTarjeta, 1000, [
      ...this.randomCorrect,
    ]);
  }

  abrirTarjeta(x: number[]) {
    console.log('entrando a abrirTarjeta x', x);
    console.log(
      'entrando a abrirTarjeta this.indentificador',
      this.indentificador
    );

    if (x.length > this.indentificador + 1) {
      clearInterval(this.identificadorIntervalo);
      console.log(
        'se ejecuta dentro de la condicional clearInterval',
        this.indentificador
      );
    }
    console.log('se ejecuta', this.indentificador);

    document
      .getElementsByClassName('quadrate')
      [this.randomCorrect[this.indentificador]].classList.add('bg-white');
    this.indentificador++;
  }

  nextLevel() {
    return this.level++;
  }

  viewCorrect() {
    for (let i = 0; i < this.randomCorrect.length; i++) {
      let x = this.viewCard(this.randomCorrect[i], i);
    }

    // this.randomCorrect.forEach(async (card) => {
    //   await this.viewCard(card - 1);
    // });
  }

  viewCard(card: number, i: number) {
    setTimeout(this.habilitar, i * 1000, card);
    setTimeout(this.deshabilitar, i * 2000, card);
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
