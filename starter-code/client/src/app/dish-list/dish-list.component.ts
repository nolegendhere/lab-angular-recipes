import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishList:Array<any>=[];
  constructor(private dishesService: DishesService) { }

  ngOnInit() {
    this.dishesService.getList().subscribe((dishesObs) => {
      this.dishList = dishesObs;
      console.log("esto this.dishList",this.dishList);
    });
  }



}
