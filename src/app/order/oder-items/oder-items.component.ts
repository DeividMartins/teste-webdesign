import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/informatica-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-oder-items',
  templateUrl: './oder-items.component.html'
})
export class OderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()
  constructor() { }

  ngOnInit() {
  }

  // metodos de Incremento, decremento e remove dos items da ordem de compra 
  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItem){
    this.remove.emit(item)
  }
}
