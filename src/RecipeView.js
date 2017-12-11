import React from 'react';
import './RecipeView.css';

const RecipeView = ({ recipe }) => (
  <div className="Recipe-view">
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
    <td className="Metric">
      {amount} {metric}
    </td>
    <td>{name}</td>
  </tr>
);

export default RecipeView;

