import React from 'react';
import './RecipeIndex.css';

const RecipeIndex = ({ names }) => (
  <div className="Recipe-index">
    <h3>Index</h3>

    <ul>
      {names.map((e, i) => 
        <RecipeItem
          name={e}
          key={i}
        />
      )}
    </ul>

  </div>
);

const RecipeItem = ({ name }) => (
  <li>
    {name}
  </li>
);

export default RecipeIndex;
