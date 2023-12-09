import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  title = 'todoapp';
  welcome= 'Hola';
  name = signal('Juan')
  tasks = signal([
    'Instalar en Angular CLI',
    'Crear Proyecto',
    'Crear Componentes',
    'Crear servicio'
  ])

    titulo = signal('Practica de Angular')

  person = {

    name : 'Hercules',
    age : 2324,
    avatar: "https://w3schools.com/howto/img_avatar.png"

  }

  handler(){
    alert('Hola')
  }

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event:Event){
    const input = event.target as HTMLInputElement
    const newValue = input.value
    this.name.set(newValue)

  }

  keydownHandler(event:KeyboardEvent){

      let input = event.target as HTMLInputElement
      console.log(input.value)
  }

}
