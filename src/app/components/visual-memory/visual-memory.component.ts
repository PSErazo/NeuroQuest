import { Component } from '@angular/core';
import { LevelComponent } from '../../shared/level/level.component';
import { LifesComponent } from '../../shared/lifes/lifes.component';
import { CommonModule } from '@angular/common';
import { elementAt, generate } from 'rxjs';
import { query } from '@angular/animations';
import { StartgameComponent } from '../../shared/startgame/startgame.component';

@Component({
  selector: 'app-visual-memory',
  standalone: true,
  imports: [CommonModule, LevelComponent, LifesComponent, StartgameComponent],
  templateUrl: './visual-memory.component.html',
  styleUrl: './visual-memory.component.css',
})
export class VisualMemoryComponent {
  //array de bloques pintados
  name: string = 'Visual Memory';
  text: string = 'Memoriza los bloques';
  
  quadrates: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numeroBloques: number = 9;
  //array de valores que se asignaran a cada bloque
  valores: number[] = [];
  //array de numeros random que se generaran
  numerosrandom: number[] = [];
  //tope de bloques elegibles
  bloqueselegibles: number = 3;
  //contador de niveles
  pantallaInicial: boolean = true;
  levelScore:string = "";
  level: number = 1;
  //etiquetas fijas
  lifes: number = 3;

  //contador de hearts
  heart: number = 3;
  contadoradicionbloques: number = 7;
  columns: number = 3;
  gap: number = 4;
  aciertos = 0;
  errados = 0;
  pintadosCorrectos: HTMLElement[] = [];
  pintadosErroneos: HTMLElement[] = [];
  estadoComponente: boolean = false;
  icono:string = "";
  selectQuadrate: number[] = []; 
  

  receivingState(estate: boolean): void {
    if (estate) {
      this.estadoComponente = estate;
      this.startGame();
    }
  }

  startGame(){
    this.generateRandom();
    this.paintRandom();
  }

  //Generar los numeros(bloques) que se elegiran
  generateRandom() {
    
    for (let i = 0; this.numerosrandom.length < this.bloqueselegibles; i++) {
      //se generara un numero random del 1 al numero de bloques
      let numerorandom: number =
        Math.floor(Math.random() * this.numeroBloques) + 1;
      //al array numerosrandom se hara un filtro(cada elemento se compara con el numero random generado, si no es igual se devolvera los valores que se repiten)
      let valorrepetido: number[] | null = this.numerosrandom.filter(
        (value) => value === numerorandom
      );
      //si el numero generado no se repite
      if (valorrepetido.length === 0) {
        //a numerosrandom se le agregara el numerorandom generado
        this.numerosrandom.push(numerorandom);
        console.log(numerorandom);
      }
    }
    this.paintRandom();
  }
  //Se pintan los bloques que tengan como valor el mismo de los random
  paintRandom() {
    //8 milisegundos
    setTimeout(() => {
      let bloques = document.querySelectorAll('.bloque');
      bloques.forEach((bloque) => {
        let valorBloque: string | undefined =
          bloque.querySelector('span')?.textContent ?? undefined;
        if (valorBloque !== undefined) {
          const valorNumero = parseInt(valorBloque);
          if (this.numerosrandom.includes(valorNumero)) {
            bloque.classList.add(`bg-[#ffffff]`);
            bloque.classList.add(`active`);
            setTimeout(() => {
              bloque.classList.remove(`bg-[#ffffff]`);
              bloque.classList.remove(`active`);
            }, 500);
          }
        }
      });
    }, 600);
  }

  // validate(quadrate: number, event: MouseEvent) {
  //   const target: HTMLElement = event.target as HTMLElement;

    


  //   if (this.numerosrandom.includes(quadrate)) {
  //     target.classList.add(`bg-[#ffffff]`);
  //     target.classList.add(`active`);

  //   //  this.selectQuadrate.push(quadrate)
     
      
  //    // const count = this.selectQuadrate.filter(num => num === quadrate).length;
  //   //    if(count < 2){
  //         this.aciertos++;
  //         this.pintadosCorrectos.push(target);
  //   //    }
      

     
      
     
        

   

   

  //     if (this.bloqueselegibles === this.aciertos) {
       
  //       let section = document.querySelector(`section`);
  //       section?.classList.remove(`bg-[#1A1B1B]`);
  //       section?.classList.add(`bg-[#B6F9D5]`);
        
  //       setTimeout(() => {
         
  //         section?.classList.remove(`bg-[#B6F9D5]`);
  //         section?.classList.add(`bg-[#1A1B1B]`);
        
          
    
  //        for (let i = 0; i < this.pintadosCorrectos.length; i++) {
  //         const element = this.pintadosCorrectos[i];
  //         element.classList.remove('bg-[#ffffff]');
  //         element.classList.remove('active'); 
  //         }


  //        for (let i = 0; i < this.pintadosErroneos.length; i++) {
  //         const element = this.pintadosErroneos[i];
  //         element.classList.remove('bg-[#214d35]');
  //         element.classList.remove(`shaking-block`);
  //         }
           
      
       
  //         }, 500);
       
  //         setTimeout(() => {
         
            
  //           this.level++;
  //           this.numerosrandom = [];
  //           this.aciertos = 0;
  //           if (this.level < 31) {
  //             this.bloqueselegibles++;
  //           }
  //           this.pintadosCorrectos = [];
  //           this.pintadosErroneos = [];
  //           this.errados = 0
  //           this.levelUp();
            
             
        
         
  //           }, 800);
       
          
  //     }
  //   } else {
  //     target.classList.add(`bg-[#214d35]`);
     
  //     this.pintadosErroneos.push(target);

  //     this.errados++;

  //     //Si llegas a tres errados por nivel
  //     if (this.errados === 3) {
  //      // this.selectQuadrate = []
  //       setTimeout(() => {
  //         this.pintadosCorrectos.forEach((element) => {
  //           element.classList.remove(`bg-[#ffffff]`);
  //           element.classList.remove(`active`);
  //         });

  //         this.pintadosErroneos.forEach((element) => {
  //           element.classList.remove(`bg-[#214d35]`);
  //           element.classList.remove(`shaking-block`);
  //         });

          

  //         this.heart--;
  //         let life: HTMLElement = document.querySelectorAll('.fa-solid')[this.heart] as HTMLElement;
  //         life.style.color = '#FAA7A5';

         

  //         if (this.heart === 0) {
  //      //    this.selectQuadrate = []
  //           this.levelScore = `Level ${this.level}`
  //           this.level = 1;
  //           this.numerosrandom = [];
  //           this.aciertos = 0;
  //           this.errados = 0;
  //           this.pintadosCorrectos = [];
  //           this.pintadosErroneos = [];
  //           this.heart = 3;

  //           setTimeout(() => {
  //             for (let i = 0; i < this.heart; i++) {
  //               let life: HTMLElement = document.querySelectorAll('.fa-solid')[
  //                 i
  //               ] as HTMLElement;
  //               life.style.color = '#ffffff';
  //             }
  //           }, 500);
            
            
  //         this.restartGame();
            
  //           //si solo erras
  //         } else {
  //           this.numerosrandom = [];
  //           this.aciertos = 0;
  //           this.errados = 0;
  //           this.pintadosCorrectos = [];
  //           this.pintadosErroneos = [];
  //           this.generateRandom();
  //         }
  //       }, 500);
  //     }
  //   }
  // }
  
  validate(quadrate: number, event: MouseEvent) {
    const target: HTMLElement = event.target as HTMLElement;
    if (this.numerosrandom.length < 1) return
    
    if (this.numerosrandom.includes(quadrate)) {
      target.classList.add(`bg-[#ffffff]`);
      target.classList.add(`active`);
      this.selectQuadrate.push(quadrate);
      this.numerosrandom.splice(this.numerosrandom.indexOf(quadrate), 1);
      this.aciertos++;

      this.pintadosCorrectos.push(target);
      console.log(this.pintadosCorrectos);
      console.log('target',target);
      if (this.bloqueselegibles === this.aciertos) {

        let section = document.querySelector(`section`);
        section?.classList.add(`rectangulo`);
        setTimeout(() => {
          section?.classList.remove(`rectangulo`);
        }, 900);
       
        
       

        setTimeout(() => {

          section?.classList.remove(`bg-[#B6F9D5]`);
          section?.classList.add(`bg-[#1A1B1B]`);



         for (let i = 0; i < this.pintadosCorrectos.length; i++) {
          const element = this.pintadosCorrectos[i];
          element.classList.remove('bg-[#ffffff]');
          element.classList.remove('active');
          }


         for (let i = 0; i < this.pintadosErroneos.length; i++) {
          const element = this.pintadosErroneos[i];
          element.classList.remove('bg-[#214d35]');
          element.classList.remove(`shaking-block`);
          }



          }, 500);

          setTimeout(() => {


            this.level++;
            this.numerosrandom = [];
            this.selectQuadrate = [];
            this.aciertos = 0;
            if (this.level < 31) {
              this.bloqueselegibles++;
            }
            this.pintadosCorrectos = [];
            this.pintadosErroneos = [];
            this.errados = 0
            this.levelUp();




            }, 800);


      }
    } else {
     
      if (this.selectQuadrate.includes(quadrate)) return;
      target.classList.add(`bg-[#214d35]`);
      
      this.pintadosErroneos.push(target);

      this.errados++;
      this.selectQuadrate.push(quadrate);
      //Si llegas a tres errados por nivel
      if (this.errados === 3) {
        
        let section = document.querySelector(`section`);
        section?.classList.add(`rectangulo-erroneo`);
        setTimeout(() => {
          section?.classList.remove(`rectangulo-erroneo`);
        }, 900);
       


        this.selectQuadrate = [];
        setTimeout(() => {
          this.pintadosCorrectos.forEach((element) => {
            element.classList.remove(`bg-[#ffffff]`);
            element.classList.remove(`active`);
          });

          this.pintadosErroneos.forEach((element) => {
            element.classList.remove(`bg-[#214d35]`);
            element.classList.remove(`shaking-block`);
          });



          this.heart--;
          let life: HTMLElement = document.querySelectorAll('.fa-solid')[this.heart] as HTMLElement;
          life.style.color = '#FAA7A5';



          if (this.heart === 0) {
            this.levelScore = `Level ${this.level}`
            this.level = 1;
            this.numerosrandom = [];
            this.aciertos = 0;
            this.errados = 0;
            this.pintadosCorrectos = [];
            this.pintadosErroneos = [];
            this.heart = 3;

            setTimeout(() => {
              for (let i = 0; i < this.heart; i++) {
                let life: HTMLElement = document.querySelectorAll('.fa-solid')[
                  i
                ] as HTMLElement;
                life.style.color = '#ffffff';
              }
            }, 500);


          this.restartGame();

            //si solo erras
          } else {
            this.numerosrandom = [];
            this.aciertos = 0;
            this.errados = 0;
            this.pintadosCorrectos = [];
            this.pintadosErroneos = [];
            this.generateRandom();
          }
        }, 500);
      }
    }
  }
  
  levelUp() {
    //Si el nivel al que pasas es igual a 3 menor que 12
    if (this.level % 3 === 0 && this.level < 12) {
      if (this.level === 3) {
        this.selectQuadrate = []
        this.quadrates = [];
        this.numeroBloques += this.contadoradicionbloques;
        this.columns++;

        let container: HTMLElement = document.querySelector('.grid')!;

        container.classList.remove('grid-cols-3');
        container.classList.add(`grid-cols-${this.columns}`);

        for (let i: number = 1; i <= this.numeroBloques; i++) {
          this.quadrates.push(i);
        }
        console.log(this.quadrates);

        this.generateRandom();
        //si es el nivel 6 o 9
      } else {
        
        
     //   this.selectQuadrate = []
        this.quadrates = [];
        this.contadoradicionbloques += 2;
        this.numeroBloques += this.contadoradicionbloques;
        this.columns++;
        this.gap--;
        let container: HTMLElement = document.querySelector('.grid')!;
        console.log(`este es el nivel${this.level}`)
        if(this.level === 6){
          container.classList.remove('w-80')
          container.classList.remove('h-80')
          container.classList.add('w-96')
          container.classList.add('h-96')
        }
        // se cambian aumentan las columnas mediante las clases
        container.classList.remove(`grid-cols-${this.columns - 1}`);
        container.classList.add(`grid-cols-${this.columns}`);

        container.classList.remove(`gap-${this.gap + 1}`);
        container.classList.add(`gap-${this.gap}`);

        for (let i: number = 1; i <= this.numeroBloques; i++) {
          this.quadrates.push(i);
        }

        this.generateRandom();
      }
    } else {
      //si es el nivel 14
      if (this.level === 14) {
        this.selectQuadrate = []
        this.quadrates = [];
        this.contadoradicionbloques += 2;
        this.numeroBloques += this.contadoradicionbloques;
        this.columns++;
        this.gap--;
        let container: HTMLElement = document.querySelector('.grid')!;

        container.classList.remove('grid-cols-3');
        container.classList.add(`grid-cols-${this.columns}`);

   

        for (let i: number = 1; i <= this.numeroBloques; i++) {
          this.quadrates.push(i);
        }

        this.generateRandom();

        //si es el nivel 1 2 4 5 7 8 10 11 12 13 15
      } else {
        this.selectQuadrate = []
        this.generateRandom();
      }
    }
  }
  restartGame():void {
    let container: HTMLElement = document.querySelector('.grid')!;
    container.classList.remove(`grid-cols-${this.columns}`);
    container.classList.remove(`gap-${this.gap}`);
    container.classList.remove('w-96')
    container.classList.remove('h-96')
    container.classList.add('w-80')
    container.classList.add('h-80')
    this.selectQuadrate = []
    this.columns = 3;
    this.bloqueselegibles = 3;
    this.numeroBloques = 9;
    this.contadoradicionbloques = 7;
    this.gap = 4;
    this.quadrates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    container.classList.add(`grid-cols-${this.columns}`);

    container.classList.add(`gap-${this.gap}`);
    this.pantallaInicial = false;
    this.estadoComponente = false;
    
  }
}
