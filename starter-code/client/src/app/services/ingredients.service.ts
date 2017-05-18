import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientsService {
  BASE_URL: string = 'http://localhost:3000';
  ingredientsList:Array<any>=[];
  ingredient:any; //not used
  constructor(private http: Http) { }

  getList() {
   return this.http.get(`${this.BASE_URL}/api/ingredients`)
     .map((res) =>{
       this.ingredientsList=res.json();
        return this.ingredientsList;
      });
  }

  get(id) {
     return this.http.get(`${this.BASE_URL}/api/ingredients/${id}`)
       .map((res) =>{
         this.ingredient = res.json(); //not used
         return res.json();
       });
   }

}
