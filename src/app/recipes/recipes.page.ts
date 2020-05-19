import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipesSubscription: Subscription;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    this.recipesSubscription = this.recipesService.recipesChanged.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(){
    this.recipesSubscription.unsubscribe();
  }

}
