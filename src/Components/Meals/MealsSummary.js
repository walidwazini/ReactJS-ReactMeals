import React from 'react';

const MealsSummary = () => {
  return (
    <section style={{
      textAlign: 'center',
      maxWidth: '45rem',
      width: '90%',
      margin: 'auto',
      marginTop: '-10rem',
      position: 'relative',
      backgroundColor: '#383838',
      color: 'white',
      borderRadius: '14px',
      padding: '1rem',
      boxShadow: '0 1px 18px 10px rgba(0,0,0,.24)'
    }} >
      <h2 style={{ fontSize: '2rem', marginTop: '0' }} >Delicious Food, Delivered To You.</h2>
      <p>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
      </p>
    </section >
  )
};

export default MealsSummary;
