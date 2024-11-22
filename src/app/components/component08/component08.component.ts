import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  standalone: true,
  imports: [],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.css'
})
export class Component08Component {

  // Variável de média
  media:number = 7;

  // Array de nomes
  nomes:string[] = ['Ralf', 'Ana', 'Danilo', 'Camila'];

  // Linguagem
  linguagem:string = 'JAVA';

}
