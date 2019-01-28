import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'test recipe desc',
    'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_960/https://storage.googleapis.com/gen-atmedia/3/2018/08/9bbf07cb31d5ed6f536454f6792d96f16c7bc26b.jpeg'
    ),
    new Recipe('Test Recipe', 'test recipe desc',
    'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_960/https://storage.googleapis.com/gen-atmedia/3/2018/08/9bbf07cb31d5ed6f536454f6792d96f16c7bc26b.jpeg'
    )

  ];

  constructor() { }

  ngOnInit() {
  }

}
