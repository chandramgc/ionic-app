import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor(
    private recipesService: RecipesService
  ) { }

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    console.log(this.recipes);
    this.recipesChanged.next(this.recipes);
  }

}
