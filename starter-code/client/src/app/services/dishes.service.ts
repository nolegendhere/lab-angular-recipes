import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DishesService {
  BASE_URL: string = 'http://localhost:3000';
  dishesList:Array<any>=[];
  dish:any;
  constructor(private http: Http) {
  }

  getList() {
    console.log("hi");
   return this.http.get(`${this.BASE_URL}/api/dishes`)
     .map((res) =>{
       this.dishesList=res.json();
       return res.json();
     });
  }

  get(id) {
     return this.http.get(`${this.BASE_URL}/api/dishes/${id}`)
       .map((res) =>{
         this.dish = res.json(); //usado a la hora de añadir un ingrediente en ingredient-list
         return res.json();
       });
   }

   addIngredient(ingredient,dish,quantity) {
     console.log("add ingredient",ingredient, "dish",dish,"quantity",quantity,"typeof",typeof(parseInt(quantity)));
     return this.http.post(`${this.BASE_URL}/api/dishes/${dish._id}/ingredients/${ingredient._id}/add`,{quantity:parseInt(quantity)}).map((res) =>{
        this.dishesList.forEach((dishInspected)=>{
          if(dish.name===dishInspected.name)
          {
            dish.ingredients.push(ingredient); //not used
          }
        });
        return res.json();
      });
   }

}
