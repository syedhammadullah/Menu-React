import React from 'react';
import Recipe from './Recipe';
import { recipes } from '../data';

const RecipeList = () => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          stock={recipe.stock}
          image={recipe.image}
        />
      ))}
    </div>
  );
};

export default RecipeList;
