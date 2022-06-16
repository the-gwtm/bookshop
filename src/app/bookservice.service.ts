import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor() { }

  horror = [{ name: "House of Leaves", id: 1, price: 1000 },
  { name: "Lunar Park", id: 2, price: 500 },
  { name: "The Hunger", id: 3, price: 700 }];

  Love = [{ name: "Attached", id: 4, price: 1000 },
  { name: "love from A to Z", id: 5, price: 800 },
  { name: "Me Before U", id: 6, price: 600 }];

  Children = [{ name: "Charlotte's Web", id: 7, price: 1000 },
  { name: "The Little Prince", id: 8, price: 1500 },
  { name: "The Secret Garden", id: 9, price: 1700 }];

  getHorror() {
    return this.horror;
  }
  getLove() {
    return this.Love;
  }
  getChildren() {
    return this.Children;
  }
}
