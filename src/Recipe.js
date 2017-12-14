import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      editing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ content: nextProps.content });
  }

  onUpdateRecipe = (text, index) => {
    this.props.updateRecipe(text, index);
    this.setState({ editing: false });
  }

  onChange = (e) => {
    this.setState({ content: e.target.value });
  }

  onClick = () => {
    if (this.state.editing === false) 
      this.setState({ editing: true });
  }

  render() {
    if (this.state.editing) {
      return (
        <div onClick={this.onClick}>
          <div contentEditable={true}
            className="Recipe-edit"
            onChange={this.onChange}>
            {this.state.content}
          </div>
          <button className="Recipe-button"
            onClick={() => this.onUpdateRecipe(
              this.state.content,
              this.props.index
            )}>
            Save
          </button>
          <button className="Recipe-button">
            Cancel
          </button>
          <button className="Recipe-button">
            Remove
          </button>
        </div>
      );
    } else {
      return (
        <div onClick={this.onClick}>
          <p>{this.state.content}</p>
        </div>
      );
    }
  }
}

export default Recipe;
