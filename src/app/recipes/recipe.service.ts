import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      name: 'Gnocchi Bake',
      description: "An Italian Classic",
      imagePath: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      ingredients: [
        new Ingredient('Gnocchi', 5),
        new Ingredient('Tomato', 10),
      ]
    },
    {
      name: 'The Same Gnocchi Bake',
      description: "An Italian Classic",
      imagePath: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
      ingredients: [
        new Ingredient('Notcchi', 10),
        new Ingredient('Tomatnot', 5),
      ]
    }
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  emit() {

  }

  ingredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(i => this.shoppingListService.addIngredient(i));
  }
}
