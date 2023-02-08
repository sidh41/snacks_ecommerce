import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = 1;
  counterprice = 6;
  
  increment() {
    this.counter++;
    this.counterprice = this.counter*6;
  }

  decrement() {
    this.counter --;
    this.counterprice = this.counter*6;
  }

}
