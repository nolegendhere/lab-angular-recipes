const express    = require('express');
const mongoose   = require('mongoose');
const ObjectId   = mongoose.Schema.Types.ObjectId;
const router     = express.Router();
const Ingredient = require('../../models/ingredient');
const Dish       = require('../../models/dish');

router.post('/dishes/:dishId/ingredients/:id/add', (req, res) => {
  console.log("hi1");
  const { dishId, id } = req.params;
  console.log("req.body",req.body);
  let { quantity } = req.body;
  quantity = Number(quantity);
  console.log("hi2 quantity",quantity);
  console.log("hi2 dishId",dishId);
  console.log("hi2 id",id);
  Dish
    .findById(dishId)
    .populate('ingredients.ingredientId')
    .exec(
     (err, dish) => {
      if (err)    { return res.status(500).json(err) };
      if (!dish)  { return res.status(404).json(new Error('404')) };
      console.log("hi3");
      let possibleIngred = dish.ingredients.filter(ingred => {
         return ingred.ingredientId._id.toString() === id;
      })[0];

      if (possibleIngred){
        possibleIngred.quantity += quantity;
      } else {

        possibleIngred = { ingredientId: id, quantity: quantity }
        console.log("hi3.5 possibleIngred",possibleIngred);
        dish.ingredients.push(possibleIngred);
      }


      dish.save( (err) => {
        if (err) { return res.status(500).json(err) }
        console.log("hi4");
        return res.status(200).json(dish)
      });
    })
});

module.exports = router;
