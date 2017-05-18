import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { DishesService } from "./services/dishes.service";
import { IngredientsService } from "./services/ingredients.service";

import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { SingleIngredientComponent } from './single-ingredient/single-ingredient.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: DishListComponent },
  { path:  'dish/:id', component: SingleDishComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    SingleDishComponent,
    SingleIngredientComponent,
    IngredientListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)     //<!-- Set the routes
  ],
  providers: [DishesService,IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
