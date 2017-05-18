import { Component, OnInit, Input,SimpleChange } from '@angular/core';

import { IngredientsService } from '../services/ingredients.service';


@Component({
  selector: 'app-single-ingredient',
  templateUrl: './single-ingredient.component.html',
  styleUrls: ['./single-ingredient.component.css']
})
export class SingleIngredientComponent implements OnInit {
  @Input() ingredientInput: any;
  ingredient:any;
  constructor(private ingredientsService: IngredientsService) {
  }

  ngOnInit() {
    this.ingredientsService.get(this.ingredientInput.ingredientId).subscribe((ingredientObs) => {
      this.ingredient = ingredientObs;
    });
  }

}
