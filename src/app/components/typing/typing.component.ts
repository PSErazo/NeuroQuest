import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'typing-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  textos = [
    'La Luna brilla en el cielo nocturno, iluminando suavemente la tierra. Sus cráteres y mares son testigos silenciosos de la historia de nuestro mundo. En la antigüedad, era adorada como una deidad, inspirando mitos y leyendas. Hoy, la Luna sigue cautivando nuestra imaginación, recordándonos nuestra conexión con el universo.',
    'En lo profundo del bosque se encuentra un lugar mágico, donde los árboles susurran secretos antiguos y las hadas danzan en la luz filtrada. El aire está lleno de fragancias frescas y el suelo está cubierto de musgo suave. Quienes se aventuran aquí sienten la calma y la maravilla de lo natural.',
    'El viaje del alma es como un río que fluye sin cesar, encontrando su camino a través de la vida. A veces tranquilo, a veces tumultuoso, siempre lleva consigo la sabiduría de las experiencias pasadas. En su curso, el alma crece, aprende y se transforma, buscando su verdadero propósito y destino.',
    'El pintor se sienta frente al lienzo en blanco, con pinceles en mano y colores brillantes a su alrededor. Con cada trazo, da vida a su imaginación, creando paisajes, retratos y emociones. Cada obra es única, una ventana al mundo interior del artista y una expresión de belleza.',
    'La ciudad despierta lentamente, con los primeros rayos del sol iluminando sus calles. Los comerciantes abren sus tiendas, los trabajadores se apresuran hacia sus empleos y los parques se llenan de gente disfrutando del día. La ciudad bulle de actividad, vibrando con la energía de sus habitantes.',
    'El colibrí, con sus brillantes plumas y su rápido aleteo, es un espectáculo de gracia y belleza. Revolotea de flor en flor, buscando néctar con su largo pico. Su vuelo es un ballet aéreo, una danza de vida y movimiento. El colibrí es un recordatorio de la delicadeza y la fuerza en la naturaleza.',
    'El libro antiguo descansa en una estantería polvorienta, sus páginas amarillentas y sus letras desgastadas por el tiempo. Contiene historias olvidadas, secretos perdidos y conocimientos ancestrales. Al abrir sus páginas, se abre una ventana al pasado, permitiendo que sus historias perduren en el presente.',
    'En primavera, el jardín se despierta de su letargo invernal, llenándose de vida y color. Las flores florecen en una explosión de tonos brillantes, y los árboles se visten de verde fresco. Las abejas zumban entre las flores, llevando el polen de una a otra. El jardín es un remanso de belleza y tranquilidad.',
    'El astrónomo observa el cielo nocturno, fascinado por la inmensidad del universo. A través de su telescopio, ve galaxias distantes, estrellas nacientes y planetas en órbita. Cada punto de luz en el cielo cuenta una historia de millones de años. El astrónomo siente la humildad y la grandeza del cosmos.',
    'En otoño, el viento susurra entre las hojas doradas, creando una melodía suave y melancólica. Los árboles se despojan de su vestido de verano, preparándose para el reposo invernal. El suelo se cubre de hojas crujientes, creando un tapiz de colores cálidos. El otoño es una sinfonía de cambio y transformación.',
  ];

  generarTextoAleatorio(lugar: number): string {
    return this.textos[lugar];
  }

  generarNumeroAleatorio(): number {
    let cantidad = this.textos.length;
    return Math.floor(Math.random() * cantidad);
  }

  ngOnInit(): void {
    this.textoPredefinido = this.generarTextoAleatorio(
      this.generarNumeroAleatorio()
    );
  }

  onKeyDown() {
    if (!this.startTime) {
      this.startTime = new Date().getTime();
    }
  }

  onKeyUp() {
    const textoUsuario = this.textoUsuario;
    let coinciden = true;
    let resultadoHtml = '';

    if (this.textoPredefinido.length !== textoUsuario.length) {
      coinciden = false;
    } else {
      for (let i = 0; i < this.textoPredefinido.length; i++) {
        if (this.textoPredefinido[i] !== textoUsuario[i]) {
          coinciden = false;
          break;
        }
      }
    }

    for (let i = 0; i < this.textoPredefinido.length; i++) {
      if (i < textoUsuario.length) {
        if (this.textoPredefinido[i] === textoUsuario[i]) {
          resultadoHtml += `<span class="correcta">${this.textoPredefinido[i]}</span>`;
        } else {
          resultadoHtml += `<span class="incorrecta">${this.textoPredefinido[i]}</span>`;
        }
      } else {
        resultadoHtml += this.textoPredefinido[i];
      }
    }

    document.getElementById('textoPredefinido')!.innerHTML = resultadoHtml;

    if (coinciden) {
      this.endTime = new Date().getTime();
      let tiempoTranscurrido = (this.endTime - this.startTime) / 1000;
      this.tiempo = `Tiempo: ${tiempoTranscurrido.toFixed(2)} segundos`;
      this.resultado = 'El texto ingresado coincide con el texto predefinido.';
    } else {
      this.resultado =
        'El texto ingresado no coincide con el texto predefinido.';
    }
  }

  preventAction(event: ClipboardEvent) {
    event.preventDefault();
  }
}
