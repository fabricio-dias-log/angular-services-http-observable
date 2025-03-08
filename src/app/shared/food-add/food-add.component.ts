import { Component } from '@angular/core';

//Services
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-add',
  standalone: false,
  templateUrl: './food-add.component.html',
  styleUrl: './food-add.component.css'
})
export class FoodAddComponent {

  constructor(private foodListService: FoodListService){}

  public listAddItem(value: string){
    this.foodListService.foodListAdd(value);
  }
}
