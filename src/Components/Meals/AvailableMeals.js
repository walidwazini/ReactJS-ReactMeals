import React, { useState, useEffect } from 'react';

import Card from '../UI/Card'
import DUMMY_MEALS from './dummy_meals';
import classes from './AvailableMeal.module.css'
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
  const mealsUrl = 'https://react-http-7483e-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
  const [meals, setMeals] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(mealsUrl)
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json()

      const loadedMeals = []
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setMeals(loadedMeals)
      setIsloading(false)
    }
    fetchMeals().catch(err => {
      setIsloading(false)
      setHttpError(err.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError} >
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map(meal => (
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
