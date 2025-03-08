import { Component } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-list',
  standalone: false,
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {
  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit() {
    this.foodList = this.foodListService.foodList();

    this.foodListService.emitEvent.subscribe(
      res => alert("Item adicionado: " + res)
    );
  }
}
