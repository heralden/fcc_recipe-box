import React, { Component } from 'react';
import './App.css';
import { sample } from './data';
import Recipe from './Recipe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      recipes: sample
    };
  }

  updateRecipe = (text, index) => {
    this.setState((prevState) => ({
      recipes: prevState.recipes.map((e) => {
        if (e.id === index) {
          return {
            id: index,
            content: text
          };
        } else {
          return e;
        }
      })
    }));
  }

  newRecipe = () => {
    this.setState((prevState) => ({
      recipes: [
        ...prevState.recipes,
        {
          id: prevState.recipes.reduce(
            (acc, e) => e.id > acc ? e.id : acc, 0
          ) + 1,
          content: ""
        }
      ]
    }));
  }

  deleteRecipe = (index) => {
    this.setState((prevState) => ({
      recipes: prevState.recipes.filter(
        (e) => e.id !== index
      )
    }));
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
