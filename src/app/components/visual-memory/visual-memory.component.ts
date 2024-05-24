import { Component } from '@angular/core';

@Component({
  selector: 'app-visual-memory',
  standalone: true,
  imports: [],
  templateUrl: './visual-memory.component.html',
  styleUrl: './visual-memory.component.css',
})
export class VisualMemoryComponent {
  //array de bloques pintados
  bloquespintado: HTMLElement[] = [];
  //array de bloques que se pintaron con el estilo "erroneo"
  bloquespintadoerroneo: HTMLElement[] = [];
  //array de bloques que se crearon
  bloques: HTMLElement[] = [];
  //bloques que se crearan
  numeroBloques: number = 9;
  //array de valores que se asignaran a cada bloque
  valores: number[] = [];
  //contador de elecciones erroneas realizadas
  eleccioneserroneas: number = 0;
  //contador de elecciones correctas
  eleccionescorrectas: number = 0;
  //numeros random generados para asignar los bloques que se tiene que elegir
  numerosrandomgenerados: number = 3;
  //array de numeros random que se generaran
  numerosrandom: number[] = [];
  //tope de bloques elegibles
  bloqueselegibles: number = 3;
  //contador de niveles
  nivel: number = 1;

  lifes: number = 3;

  ngOnInit(): void {
    this.crearElementos();
    this.pintado();
  }

  //funcion para que se creen los bloques
  crearElementos(): void {
    const CONTAINERFIJO: HTMLElement | null =
      document.querySelector('.containerfijo');
    let level: HTMLElement | null = document.querySelector('p');

    if (level) {
      level.textContent = this.nivel.toString();
    } else {
      console.log('No se encontró ningún elemento <p>');
    }

    //si se encuentra en el nivel 1 o 2
    if (this.nivel === 1 || this.nivel === 2) {
      //se iterara 9 veces(numero de bloques que se tienen que crear)
      for (let i = 0; i < this.numeroBloques; i++) {
        //se crea una etiqueta div
        let div: HTMLElement = document.createElement('div');
        //se crea una etiqueta span
        let span: HTMLElement = document.createElement('span');

        //se le agrega una clase "bloque" al div
        div.classList.add('bloque');
        //se le agrega una etiqueta span al div
        div.appendChild(span);

        //se agrega el div creado al array bloques
        this.bloques.push(div);
        //se accede a la etiqueta con clase .containerfijo(container de los bloques) y se agrega el div que se acaba de crear

        let bloquespan: HTMLElement | null =
          this.bloques[i].querySelector('span');
        console.log(CONTAINERFIJO);
        if (CONTAINERFIJO) {
          CONTAINERFIJO.append(this.bloques[i]);
        } else {
          console.log('no se encontro la etiqueta con la clase containerfijo');
        }

        // se llama a la funcion para crear los valores random que se asignaran a cada bloque
        this.randomValue();
        console.log('value', this.valores);

        //al bloque que se acaba de crear,accedo a la etiqueta span y le asigno un valor random

        if (bloquespan) {
          bloquespan.textContent = this.valores[i].toString();
        } else {
          console.log('no se encontro la etiqueta span');
        }
      }

      //nivel 3
    } else if (this.nivel === 3) {
      //se iterara 16 veces(numero de bloques que se tienen que crear)
      for (let i = 0; i < this.numeroBloques; i++) {
        //accedo a la etiqueta con la clase .containerfijo y le quito la clase container

        if (CONTAINERFIJO) {
          CONTAINERFIJO.classList.remove('container');
          //accedo a la etiqueta con la clase .containerfijo y le agrego .container-nivel12
          CONTAINERFIJO.classList.add('container-nivel2');
        }

        //se crea una etiqueta div
        let div: HTMLElement = document.createElement('div');
        //se le agrega una etiqueta span al div
        let span: HTMLElement = document.createElement('span');

        //se le agrega una etiqueta span al div
        div.appendChild(span);

        //se le agrega una clase "bloque" al div

        div.classList.add('bloque');
        //se agrega el div creado al array bloques
        this.bloques.push(div);
        //se accede a la etiqueta con clase .containerfijo(container de los bloques) y se agrega el div que se acaba de crear
        if (CONTAINERFIJO) {
          CONTAINERFIJO.append(this.bloques[i]);
        }
        // se llama a la funcion para crear los valores random que se asignaran a cada bloque
        this.randomValue();
        //al bloque que se acaba de crear,accedo a la etiqueta span y le asigno un valor random
        let bloquespan: HTMLElement | null =
          this.bloques[i].querySelector('span');
        if (bloquespan) {
          bloquespan.textContent = this.valores[i].toString();
        }
      }
    }
  }

  //funcion que generara los valores random para asignar a los bloques
  randomValue(): void {
    //genera un numero aleatorio del 1 al 9
    let rnd: number = Math.floor(Math.random() * this.numeroBloques) + 1;
    //al array valores se hare un filtro(cada elemento se compara con el numero random generado, si no es igual se devolvera los valores que se repiten),
    let values: number[] | null = this.valores.filter((value) => value === rnd);
    //si el rnd no es igual a ninguno de los elementos del array valores
    if (values.length < 1) {
      //se hace agrega al array el rnd
      this.valores.push(rnd);
    } else {
      //se vuelve a llamar a la funcion para que me genere un numero que no se repita
      this.randomValue();
    }
  }

  //funcion para que se pinten los bloques con valores iguales a los valores random generados para elegir
  pintado(): void {
    //si el nivel es...
    switch (this.nivel) {
      case 1:
        //se iterara bloqueselegibles veces
        for (
          let i = 0;
          this.numerosrandom.length < this.bloqueselegibles;
          i++
        ) {
          console.log('this.numerosrandom  case 1', this.numerosrandom);

          //se generara un numero random del 1 al 9
          let numerorandom: number = Math.floor(Math.random() * 9) + 1;
          //al array numerosrandom se hara un filtro(cada elemento se compara con el numero random generado, si no es igual se devolvera los valores que se repiten)
          let valorrepetido: number[] | null = this.numerosrandom.filter(
            (value) => value === numerorandom
          );
          //si el numero generado no se repite
          if (valorrepetido.length === 0) {
            //a numerosrandom se le agregara el numerorandom generado
            this.numerosrandom.push(numerorandom);
            console.log('this.numerosrandom  case 1 after', this.numerosrandom);
          }
        }

        //8 milisegundos
        setTimeout(() => {
          //se itera sobre los bloques
          for (let i = 0; i < this.bloques.length; i++) {
            //obtengo el valor del bloque iterado

            let span: HTMLElement | null =
              this.bloques[i].querySelector('span');
            if (span) {
              let contenidoBloque: number = parseInt(span.textContent || '0');

              //si el valor esta dentro del arreglos numerosrandom(3)
              if (this.numerosrandom.includes(contenidoBloque)) {
                //al bloque iterado se le agrega la clase "active"
                this.bloques[i].classList.add('active');
                //8 milisegundos
                setTimeout(() => {
                  //se le quita la clase "active" al bloque iterado
                  this.bloques[i].classList.remove('active');
                }, 800);
              }
              //al bloque iterado se le agrega el evento click
            }
            this.bloques[i].addEventListener('click', (evento) => {
              this.eleccion(evento, [...this.numerosrandom]); // Pasamos el evento y un valor adicional como parámetros
            });
          }
        }, 800);

        break;
      case 2:
        //se itera sobre los bloques, en este nivel son 4 bloques que se pintaran
        for (
          let i = 0;
          this.numerosrandom.length < this.bloqueselegibles;
          i++
        ) {
          //se generan numeros random del 1 al 9(hasta que el arreglo numeros random tenga 4 elementos)
          let numerorandom: number = Math.floor(Math.random() * 9) + 1;
          //al array numerosrandom se hara un filtro(cada elemento se compara con el numero random generado, si no es igual se devolvera los valores que se repiten)
          let valorrepetido: number[] | null = this.numerosrandom.filter(
            (value) => value === numerorandom
          );
          //si el numero generado no se repite
          if (valorrepetido.length === 0) {
            this.numerosrandom.push(numerorandom);
            console.log(numerorandom);
          }
        }

        setTimeout(() => {
          for (let i = 0; i < this.bloques.length; i++) {
            let span: HTMLElement | null =
              this.bloques[i].querySelector('span');

            if (span) {
              let contenidoBloque = parseInt(span.textContent || '0');

              if (this.numerosrandom.includes(contenidoBloque)) {
                this.bloques[i].classList.add('active');
                setTimeout(() => {
                  this.bloques[i].classList.remove('active');
                }, 800);
              }
              this.bloques[i].addEventListener('click', (evento) => {
                this.eleccion(evento, [...this.numerosrandom]); // Pasamos el evento y un valor adicional como parámetros
              });
            }
          }
        }, 800);
        break;
      case 3:
        for (
          let i = 0;
          this.numerosrandom.length < this.bloqueselegibles;
          i++
        ) {
          let numerorandom: number | null =
            Math.floor(Math.random() * this.numeroBloques) + 1;

          let valorrepetido: number[] | null = this.numerosrandom.filter(
            (value) => value === numerorandom
          );

          if (valorrepetido.length === 0) {
            this.numerosrandom.push(numerorandom);
            console.log(numerorandom);
          }
        }

        setTimeout(() => {
          for (let i = 0; i < this.bloques.length; i++) {
            let span: HTMLElement | null =
              this.bloques[i].querySelector('span');

            if (span) {
              let contenidoBloque: number = parseInt(span.textContent || '0');

              if (this.numerosrandom.includes(contenidoBloque)) {
                this.bloques[i].classList.add('active');
                setTimeout(() => {
                  this.bloques[i].classList.remove('active');
                }, 800);
              }
              this.bloques[i].addEventListener('click', (evento) => {
                this.eleccion(evento, [...this.numerosrandom]); // Pasamos el evento y un valor adicional como parámetros
              });
            }
          }
        }, 800);
        break;
    }
  }

  //funcion para cuando se selecciona un bloque
  eleccion(e: Event, randomNumeros: number[]) {
    const CONTAINERFIJO: HTMLElement | null =
      document.querySelector('.containerfijo');
    //si la longitud del arreglo numerosrandom es igual a bloques elegibles
    console.log('this.numerosrandom', randomNumeros);
    console.log('this.bloqueselegibles', this.bloqueselegibles);

    if (this.numerosrandom.length === this.bloqueselegibles) {
      //se almacena la informacion de la etiqueta donde se hizo el click
      let bloqueseleccionado: HTMLElement = e.target as HTMLElement;
      //se obtiene el valor del bloque seleccionado

      let span: HTMLElement | null = bloqueseleccionado.querySelector('span');

      if (span) {
        let valorseleccionado: number = parseInt(span.textContent || '0');

        //se itera sobre los numerosrandom
        for (let i = 0; i < this.numerosrandom.length; i++) {
          //si el valor del bloque seleccionado es igual al primer elemento de los bloques pintados
          if (valorseleccionado == this.numerosrandom[i]) {
            //al bloque seleccionado se le agrega la clase active
            bloqueseleccionado.classList.add('active');
            //el bloque seleccionado se agrega al array bloquespintados
            this.bloquespintado.push(bloqueseleccionado);
            //al bloque seleccionado se le quita el evento click
            bloqueseleccionado.removeEventListener('click', (evento) => {
              this.eleccion(evento, [...this.numerosrandom]); // Pasamos el evento y un valor adicional como parámetros
            });
            console.log(this.bloquespintado);
            //se suma 1 al contador elecciones correctas
            this.eleccionescorrectas++;

            //si elecciones correctas es igual bloques elegibles
            if (this.eleccionescorrectas == this.bloqueselegibles) {
              //se itera sobre bloquespintadoserroneo
              for (let i = 0; i < this.bloquespintadoerroneo.length; i++) {
                //a los bloques que estan en el array bloquespintadoerroneo se le quitara la clase "bloque-equivocado"
                this.bloquespintadoerroneo[i].classList.remove(
                  'bloque-equivocado'
                );
              }

              setTimeout(() => {
                this.bloquespintado = [];
                this.bloquespintadoerroneo = [];
                this.bloques = [];
                this.valores = [];
                this.numerosrandom = [];
                this.eleccionescorrectas = 0;
                this.eleccioneserroneas = 0;
                //subes de nivel
                this.nivel++;
                //se suma un 1 a bloques elegibles
                this.bloqueselegibles++;
                //si pasas al nivel 3 el numero de bloques ahora seran 16
                if (this.nivel == 3) {
                  this.numeroBloques += 7;
                }

                //limpio el containerfijo
                if (CONTAINERFIJO) {
                  CONTAINERFIJO.innerHTML = '';
                }

                //llamo a crear elementos
                this.crearElementos();
                //llamo a pintado
                this.pintado();
              }, 500);
              //se reinicia todo
            }

            //si la ultima eleccion que hiciste fue la ultima para que sea igual a bloques elegibles se terminara el bucle
            return;
          }
        }

        //se itera sobre los numerosrandom
        for (let i = 0; i < this.numerosrandom.length; i++) {
          //si el valor seleccionado es diferente a cualquier elemento de los numeros random
          if (valorseleccionado !== this.numerosrandom[i]) {
            //se suma 1 al contador eleccioneserroneas
            this.eleccioneserroneas++;
            console.log(this.eleccioneserroneas);
            //al bloque seleccionado se le agrega la clase shaking-block(para que tiemble)
            bloqueseleccionado.classList.add('shaking-block');
            //si la eleccion que hiciste es tu tercera eleccion erronea
            if (this.eleccioneserroneas == 3) {
              for (let i = this.lifes - 1; i < this.lifes; i++) {
                let life: HTMLElement = document.querySelectorAll('.fa-solid')[
                  i
                ] as HTMLElement;
                life.classList.add('lostheart');
                console.log(life);
                this.lifes--;
              }

              if (this.lifes == 0) {
                let lose: HTMLElement | null = document.querySelector('main');

                if (lose) {
                  lose.style.display = 'none';
                }
              }

              console.log(`---------${this.lifes}--------`);
              for (let i = 0; i < this.bloques.length; i++) {
                this.bloques[i].removeEventListener('click', (evento) => {
                  this.eleccion(evento, [...this.numerosrandom]); // Pasamos el evento y un valor adicional como parámetros
                });
              }

              //se obtiene la etiquera body
              let mainerroneo: HTMLElement | null =
                document.querySelector('main');

              //el bloque seleccionado que es un bloque erroneo se agrega al array bloquespontadoerroneo para luego iterar sobre ello y quitarle la clase "erroneo"
              this.bloquespintadoerroneo.push(bloqueseleccionado);

              console.log(this.bloquespintadoerroneo);

              if (mainerroneo) {
                //se le agrega la clase "erroeno" a la etiqueta body
                mainerroneo.classList.add('erroneo');
              }

              //al bloque seleccionado se le agrega la clase "gameover-bloque-equivocado"
              bloqueseleccionado.classList.add('gameover-bloque-equivocado');

              //se obtiene las etiquetas que tengan como clase .bloque-equivocado(devuelve un nodelist)
              let gameoverBloques: HTMLElement[] = Array.from(
                document.querySelectorAll('.bloque-equivocado')
              );

              //para cada elemento del array gameoverBloques, se almacena en la variable gameoverBloque
              gameoverBloques.forEach((gameoverBloque) => {
                //se le quita la clase "bloque-equivocado"
                gameoverBloque.classList.remove('bloque-equivocado');
                //se le agrega la clase "gameover-bloque-equivocado"
                gameoverBloque.classList.add('gameover-bloque-equivocado');
              });

              //se obtiene las etiquetas que tengan la clase "bloque" y que no tengan la clase ".gameover-bloque-equivocado"(devuelve un nodelist )
              let noElegidos: HTMLElement[] = Array.from(
                document.querySelectorAll(
                  'div.bloque:not(.gameover-bloque-equivocado)'
                )
              );

              //para cada elemento del array noElegidos se almacena en una variable noElegidos
              noElegidos.forEach((noElegidos) => {
                //se le agrega la clase "gameover"
                noElegidos.classList.add('gameover');
              });

              //5 milisegundos
              setTimeout(() => {
                //al body se le quita la clase "erroneo"
                if (mainerroneo) {
                  mainerroneo.classList.remove('erroneo');
                }
              }, 200);

              setTimeout(() => {
                //se reinicia todo(no se sube nivel)
                this.bloquespintado = [];
                this.bloquespintadoerroneo = [];
                this.bloques = [];
                this.valores = [];
                this.numerosrandom = [];
                this.eleccioneserroneas = 0;
                this.eleccionescorrectas = 0;
                if (CONTAINERFIJO) {
                  CONTAINERFIJO.innerHTML = '';
                }

                this.crearElementos();
                this.pintado();
              }, 500);

              //de lo contario si la eleccion es erronea pero no es tu tercer eleccion erronea
            } else {
              //al bloque seleccionado se le agrega la clase "bloque-equivocado"
              bloqueseleccionado.classList.add('bloque-equivocado');
              //al bloque seleccionado se le agrega la clase "shaking-block"
              bloqueseleccionado.classList.add('shaking-block');
              //al bloque seleccionado se le quita el evento click
              bloqueseleccionado.removeEventListener('click', (evento) => {
                this.eleccion(evento, [...this.numerosrandom]); // Pasamos el evento y un valor adicional como parámetros
              });
              //se agrega el bloque erroneo al array bloquespintadoerroneo
              this.bloquespintadoerroneo.push(bloqueseleccionado);
              console.log(this.bloquespintadoerroneo);
            }

            //se finaliza el buvle
            return;
          }
        }
      }
    }
  }
}
