import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      editing: false,
      height: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.content !== nextProps.content)
      this.setState({ content: nextProps.content });
  }

  toggleEdit = () => {
    this.setState((prevState) => ({
      editing: prevState.editing ? false : true
    }));
  }

  onUpdateRecipe = (text, index) => {
    this.props.updateRecipe(text, index);
    this.toggleEdit();
  }

  onChange = (e) => {
    this.setState({ content: e.target.value });
  }

  onCancel = () => {
    this.setState({
      content: this.props.content
    }, this.toggleEdit);
  }

  onClick = (e) => {
    const height = document.getElementById(
      "Recipe-" + this.props.index
    ).clientHeight;

    this.setState({ 
      height: height
    }, this.toggleEdit);
  }

  render() {
    if (this.state.editing) {
      return (
        <div>
          <textarea className="Recipe-edit"
            onChange={this.onChange}
            style={{ height: this.state.height + 'px' }}
            value={this.state.content}>
          </textarea>

          <br/>
          <button className="Recipe-button"
            onClick={() => this.onUpdateRecipe(
              this.state.content,
              this.props.index
            )}>
            Save
          </button>
          <button className="Recipe-button"
            onClick={this.onCancel}>
            X
          </button>
          <button className="Recipe-button"
            onClick={() => this.props.deleteRecipe(
              this.props.index
            )}>
            Del
          </button>
        </div>
      );
    } else {
      let w = null, h = null;
      if (this.state.content.length === 0) {
        w = '10em';
        h = '20em';
      }

      return (
        <div onClick={this.onClick}
          id={"Recipe-" + this.props.index}
          style={(w && h) ? {
            width: w, height: h 
          } : {}}>
          <p>{this.state.content}</p>
        </div>
      );
    }
  }
}

export default Recipe;
