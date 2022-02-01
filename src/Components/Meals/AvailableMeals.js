import React from 'react';

import DUMMY_MEALS from './dummy_meals';
import classes from './AvailableMeal.module.css'

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <li>
      {meal.name}
    </li>
  ))

  return (
    <section className={classes.meals} >
      <ul>
        {mealsList}
      </ul>
    </section>
  )
};

export default AvailableMeals;
