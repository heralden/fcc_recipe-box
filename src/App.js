import React, { Component } from 'react';
import './App.css';
import { sample } from './data';
import Recipe from './Recipe';

class App extends Component {
  constructor(props) {
    super(props);

    const storedState = JSON.parse(
      localStorage.getItem('recipes')
    );
    this.state = { 
      recipes: storedState ? storedState : sample
    };
  }

  updateRecipe = (text, index) => {
    this.setState((prevState) => {
      const newRecipes = prevState.recipes.map((e) => {
        if (e.id === index) {
          return {
            id: index,
            content: text
          };
        } else {
          return e;
        }
      });

      localStorage.setItem('recipes', JSON.stringify(newRecipes));
      return { recipes: newRecipes };
    });
  }

  newRecipe = () => {
    this.setState((prevState) => {
      const newRecipes = [
        ...prevState.recipes,
        {
          id: prevState.recipes.reduce(
            (acc, e) => e.id > acc ? e.id : acc, 0
          ) + 1,
          content: ""
        }
      ];

      localStorage.setItem('recipes', JSON.stringify(newRecipes));
      return { recipes: newRecipes };
    });
  }

  deleteRecipe = (index) => {
    this.setState((prevState) => {
      const newRecipes = prevState.recipes.filter(
        (e) => e.id !== index
      );

      localStorage.setItem('recipes', JSON.stringify(newRecipes));
      return { recipes: newRecipes };
    });
  }

  render() {
    return (
      <div className="App">

        {this.state.recipes.map((e) =>
          <Recipe {...e} key={e.id} index={e.id}
            updateRecipe={this.updateRecipe}
            deleteRecipe={this.deleteRecipe}
          />
        )}

        <button onClick={this.newRecipe}>
          Add Recipe
        </button>

      </div>
    );
  }
}

export default App;
