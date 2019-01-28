import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent{
    shoppingList = [
        'Tomato',
        'Anion',
        'sugar'
    ]

    ingredients: Ingredient[] = [
        new Ingredient("Apples","5"),
        new Ingredient("Tomates","7"),
        new Ingredient("Lemon","3")
    ]
}
