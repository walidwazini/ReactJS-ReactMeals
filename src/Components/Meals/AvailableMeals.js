import React from 'react';

import Card from '../UI/Card'
import DUMMY_MEALS from './dummy_meals';
import classes from './AvailableMeal.module.css'
import MealItem from './MealItem/MealItem';


const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={classes.meals} >
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
};

export default AvailableMeals;
