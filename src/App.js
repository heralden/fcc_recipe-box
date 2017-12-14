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
    this.setState((prevState) => {
      recipes: prevState.recipes.map((e) => {
        if (e.id === index) {
          return {
            id: index,
            content: text
          };
        } else {
          return e;
        }
      });
    });
  }

  render() {
    return (
      <div className="App">

        {this.state.recipes.map((e, i) =>
          <Recipe {...e} key={e.id} index={e.id}
            updateRecipe={this.updateRecipe}
          />
        )}

        <button>Add Recipe</button>

      </div>
    );
  }
}

export default App;
