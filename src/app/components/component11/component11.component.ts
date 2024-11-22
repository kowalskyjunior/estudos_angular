import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css'
})
export class Component11Component {

  // Objeto de formulário
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)
    ]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)
    ])
  });

  // Visibilidade dos botões
  btnCadastrar: boolean = true;

  // Array de pessoas
  array: Pessoa[] = [];

  // Armazenar index da pessoa selecionada
  index: number = -1;

  // Função de cadastro
  cadastrar() {
    // Cadastro no array
    this.array.push(this.formulario.value as Pessoa);

    // Limpeza dos inputs
    this.formulario.reset();

    // Visualização via console
    // console.table(this.array)
  }

  // Função de seleção
  selecionar(index:number){

    // Atribuir o index da pessoa
    this.index = index;

    // Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome:this.array[index].nome,
      idade:this.array[index].idade,
      cidade:this.array[index].cidade
    });

    // Visibilidade dos botões
    this.btnCadastrar = false;

  }

  // Função de alteração
  alterar(){

    // Alterar array
    this.array[this.index] = this.formulario.value as Pessoa;

    // Limpas os inputs
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true;

  }

  remover(){

    // Removendo pessoa do array
    this.array.splice(this.index, 1);

    // Limpeza dos inputs
    this.formulario.reset()

    this.btnCadastrar = true;

  }

  // Função de cancelamento
  cancelar(){

    //Limpeza dos inputs
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true;

  }
 
}
