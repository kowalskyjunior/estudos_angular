import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {
  imagem:string = "https://media.istockphoto.com/id/491701259/pt/foto/c%C3%A9u-azul-com-sol.jpg?s=612x612&w=0&k=20&c=RCRVeEg12zAf5zt_-gIjjJyiadxuP0-ulBEMT3ggaxM=";

  changeImage(){
    if(this.imagem === 'https://media.istockphoto.com/id/491701259/pt/foto/c%C3%A9u-azul-com-sol.jpg?s=612x612&w=0&k=20&c=RCRVeEg12zAf5zt_-gIjjJyiadxuP0-ulBEMT3ggaxM='){
      this.imagem = 'https://static.vecteezy.com/ti/fotos-gratis/t2/4125202-panorama-da-noite-ceu-com-nuvens-e-lua-cheia-foto.jpg'
    }else{
      this.imagem = 'https://media.istockphoto.com/id/491701259/pt/foto/c%C3%A9u-azul-com-sol.jpg?s=612x612&w=0&k=20&c=RCRVeEg12zAf5zt_-gIjjJyiadxuP0-ulBEMT3ggaxM=';
    }
  }
}
