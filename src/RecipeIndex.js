import React from 'react';
import './RecipeIndex.css';

const RecipeIndex = ({ names }) => (
  <div className="Recipe-index">

    <ul>
      {names.map((e, i) => 
        <RecipeItem
          name={e}
          key={i}
        />
      )}

      <AddRecipe />
    </ul>

  </div>
);

const RecipeItem = ({ name }) => (
  <li>
    {name}
  </li>
);

const AddRecipe = (props) => (
  <li className="Add-recipe">
    Add recipe
  </li>
);

export default RecipeIndex;
