import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product:string;
  price:number;
  n:number=0;
  items=[{'product':'levis jeans','price':150},
  {'product':'arrow shirt','price':100},{'product':'blue sarry','price':200},{'product':'nike shoe','price':250}];
  cart=[];
  add(item){
    this.cart.push(item);
    this.n+=item.price;
  }
  remove(i,item){
    this.cart.splice(i,1);
    this.n-=item.price;
  }
  place(){
    if(this.n!=0){
      alert('order is placed');
    }
  }
}

