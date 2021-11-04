import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {  
  listaProdutos: Produto[] = [
    {id:1, nome:"Prod1", preco:10},
    {id:2, nome:"Prod2", preco:20},
    {id:3, nome:"Prod3", preco:30},
    {id:4, nome:"Prod4", preco:40},
    {id:5, nome:"Prod5", preco:50},  
  ];

  constructor() { 

  }

  addProduto(produto: Produto) {
    this.listaProdutos.push(produto);
  }

  getProdutos() {
    return this.listaProdutos;    
  }  
}
