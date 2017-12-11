import React, { Component } from 'react';
import './App.css';
import RecipeIndex from './RecipeIndex';
import RecipeView from './RecipeView';
import { sample } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      recipes: sample,
      current: 0
    };
  }

  render() {
    return (
      <div className="App">

        <RecipeIndex 
          names={this.state.recipes.map(
            e => e.name
          )}
        />

        <RecipeView 
          recipe={this.state.recipes.filter(
            e => e.id === this.state.current
          )[0]}
        />

      </div>
    );
  }
}

export default App;
