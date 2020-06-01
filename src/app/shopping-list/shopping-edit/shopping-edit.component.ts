import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredient: EventEmitter<Ingredient> = new EventEmitter();

  model = new Ingredient('', 0);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newIngredient.emit(this.model);
  }
}
