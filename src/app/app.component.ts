import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newAPP';
  myProduct: Product;
  constructor(){
    this.myProduct={
      id: 1,
      marca: "BOstring",
      descrizione: "string",
      costo: 22222,
      disponibilita: 123,
      numApprezzamenti: 0
    };
     
  }
  viewLike(numApprezzamenti){
    alert("ma braaavo !"+ numApprezzamenti)
  }

}
