import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NewsForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleCountryChange = this.handleCountryChange.bind(this);
      this.state = {countries: ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de',
                        'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'in', 'it', 'jp', 'kr', 'lt', 'lv',
                        'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa',
                        'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za']};
    }
  
    handleCategoryChange(event) {
      this.props.onCategoryChange(event.target.value);
    }
  
    handleCountryChange(event) {
      this.props.onCountryChange(event.target.value);
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
            <br/>
            <label>
              Pick articles country:
            </label>
            <select onChange={this.handleCountryChange}>
              <option selected>il</option>
              {
                this.state.countries.map(country => <option>{country}</option>)
              }
            </select>
        </form>
      );
    }
  }
  