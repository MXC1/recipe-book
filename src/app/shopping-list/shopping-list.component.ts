import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    {name: "Gnocchi", amount: 10},
    {name: "Tomatoes", amount: 4},
    {name: "Chives", amount: 20},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
