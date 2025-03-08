import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {
  public emitEvent = new EventEmitter();
  private url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public foodList(): Observable<FoodList[]> {
    return this.http.get<FoodList[]>(`${this.url}/food-list`)
      .pipe(
        res => res,
        err => err
      );
  }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}/food-list`, { name: value })
      .pipe(
        res => res,
        err => err
      );
  }

  public foodListEdit(id: string, value: string): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}/food-list/${id}`, { name: value })
      .pipe(
        res => res,
        err => err
      );
  }

  public foodListDelete(id: string): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}/food-list/${id}`)
      .pipe(
        res => res,
        err => err
      );
  }

  public foodListAlert(value: FoodList){
    return this.emitEvent.emit(value);
  }
}
