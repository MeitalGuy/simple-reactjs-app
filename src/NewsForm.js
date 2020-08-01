import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NewsForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }
  
    handleCategoryChange(event) {
      this.props.onCategoryChange(event.target.value);
    }
  
    render() {
      return (
        <form>
          <label>
            Pick articles category:
          </label>
            <select onChange={this.handleCategoryChange}>
              <option>business</option>
              <option>entertainment</option>
              <option selected>general</option>
              <option>health</option>
              <option>science</option>
              <option>sports</option>
              <option>technology</option>
            </select>
        </form>
      );
    }
  }
  