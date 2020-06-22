import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  model = new Ingredient('', 0);

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.shoppingListService.addIngredient(this.model);
  }
}
