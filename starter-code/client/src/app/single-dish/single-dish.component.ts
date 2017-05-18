import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  dish: any;
  constructor(private route: ActivatedRoute,
    private dishesService: DishesService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetails(params['id']);
    });
  }

  getDishDetails(id) {
   this.dishesService.get(id)
     .subscribe((dishObs) => {
       this.dish = dishObs;
     });
 }

}
