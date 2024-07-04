import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-startgame',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './startgame.component.html',
  styleUrl: './startgame.component.css',
})
export class StartgameComponent {
  @Input() public name: string = "";
  @Input() public text: string = "";
  @Input() public levelScore: any =  0;
  @Input() public pantallaInicial: boolean = false;
    //Se instancia el eventEmitter que emitera un evento con un string
  @Output() messageEvent = new EventEmitter<boolean>();
  
  cambiarEstado(){
    //el metodo emit sirve para enviar eventos
    this.messageEvent.emit(true)
  }

}
