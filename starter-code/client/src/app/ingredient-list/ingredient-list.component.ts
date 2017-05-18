import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {
  ingredientsList:Array<any>=[];
  constructor(private ingredientsService: IngredientsService,private dishesService: DishesService) { }

  ngOnInit() {
    this.ingredientsService.getList().subscribe((ingredientsObs) => {
      this.ingredientsList = ingredientsObs;
    });
  }

  addIngredient(ingredient,quantity){
    console.log("ingredient",ingredient,"dish",this.dishesService.dish);
    this.dishesService.addIngredient(ingredient,this.dishesService.dish,quantity).subscribe(()=>{
      console.log("fet");
    });
  }

}
