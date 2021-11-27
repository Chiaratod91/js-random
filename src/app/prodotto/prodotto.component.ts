
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
 
export class ProdottoComponent {
@Input() prodotto1: Product;
@Output() like = new EventEmitter<number>();
constructor(){
}

incrementaApprezzamenti() {
  this.prodotto1.numApprezzamenti= this.prodotto1.numApprezzamenti +1;
  this.like.emit(this.prodotto1.numApprezzamenti);
}
}