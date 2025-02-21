import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  private list: Array<string> = [
    "X-Bacon",
    "X-Burger",
    "Arroz",
    "Feijão",
    "Ovo"
  ];

  constructor() { }

  public foodList(): Array<string> {
    return this.list;
  }
}
