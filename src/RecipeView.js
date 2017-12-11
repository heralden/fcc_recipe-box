import React from 'react';
import './RecipeView.css';

const RecipeView = ({ recipe }) => (
  <div className="Recipe-view">
    <h3>View</h3>

    <table>
      <tbody>
        {recipe.ingredients.map((e, i) => 
          <IngredientItem
            name={e.name}
            amount={e.amount}
            metric={e.metric}
            key={i}
          />
        )}
      </tbody>
    </table>
  </div>
);

const IngredientItem = ({ name, amount, metric }) => (
  <tr>
    <td>{name}</td>
    <td>{amount}</td>
    <td>{metric}</td>
  </tr>
);

export default RecipeView;

