import React, { Component } from 'react';
import './App.css';
import { sample } from './data';
import Recipe from './Recipe';

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

        {this.state.recipes.map((e, i) =>
          <Recipe {...e} />
        )}

        <button>Add Recipe</button>

      </div>
    );
  }
}

export default App;
