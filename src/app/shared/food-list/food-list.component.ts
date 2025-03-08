import { Component } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';
import { FoodList } from '../../module/food-list';

@Component({
  selector: 'app-food-list',
  standalone: false,
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit() {
    this.foodListService.foodList().subscribe({
      next: (res: Array<FoodList>) => this.foodList = res,
      error: (err: any) => console.log(err)
    });

    this.foodListService.emitEvent.subscribe({
      next: (res: FoodList) => {
        alert("Item adicionado: " + res.name);
        this.foodList.push(res);
      }
    });
  }
}
