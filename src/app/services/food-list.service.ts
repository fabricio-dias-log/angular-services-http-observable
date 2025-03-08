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
    "Ovos"
  ];

  constructor() { }

  public foodList(): Array<string> {
    return this.list;
  }

  public foodListAdd(value: string) {
    return this.list.push(value);
  }
}
