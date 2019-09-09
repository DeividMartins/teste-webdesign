import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartService.items;
  }

  // limpando carrinho
  clear(){
    this.shoppingCartService.clear()
  }

  // removendo item do carrinho
  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  // adicionando item no carrinho
  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

  // total de preço
  total():number{
    return this.shoppingCartService.total()
  }

}
