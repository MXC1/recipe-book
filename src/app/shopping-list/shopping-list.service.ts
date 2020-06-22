import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    {name: "Gnocchi", amount: 10},
    {name: "Tomatoes", amount: 4},
    {name: "Chives", amount: 20},
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
