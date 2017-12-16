import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      editing: props.editing,
      height: 256
    };
  }

  focusTextarea = () => {
    if (this.state.editing)
      this.textarea.focus();
  }
  componentDidMount() {
    this.focusTextarea();
  }
  componentDidUpdate() {
    this.focusTextarea();
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
    this.setState({ 
      height: this.recipeDiv.clientHeight
    }, this.toggleEdit);
  }

  render() {
    if (this.state.editing) {
      return (
        <div>
          <textarea className="Recipe-edit"
            onChange={this.onChange}
            ref={(input) => { this.textarea = input; }}
            style={{ height: this.state.height + 'px' }}
            value={this.state.content}>
          </textarea>

          <br/>
          <button className="Icon-button"
            onClick={() => this.onUpdateRecipe(
              this.state.content,
              this.props.index
            )}>
            <i className="fa fa-save"/>
          </button>
          <button className="Icon-button"
            onClick={this.props.content.length === 0 ?
                      () => this.props.deleteRecipe(this.props.index)
                      : this.onCancel}>
            <i className="fa fa-times"/>
          </button>
          <button className="Icon-button Trash-button"
            onClick={() => this.props.deleteRecipe(
              this.props.index
            )}>
            <i className="fa fa-trash"/>
          </button>
        </div>
      );
    } else {
      let w = null, h = null;
      if (this.state.content.length === 0) {
        w = '10em';
        h = '16em';
      }

      return (
        <div onClick={this.onClick}
          id={"Recipe-" + this.props.index}
          ref={(div) => { this.recipeDiv = div; }}
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
