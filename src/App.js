import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Articles from './Articles';
import NewsForm from './NewsForm';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.handleCategoryChange.bind(this);
    this.state = {
      category: 'general'
    };
  }

  handleCategoryChange = (category) => {
    this.setState({category: category});
  }

  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <div className="col-md-3">
            <NewsForm onCategoryChange={this.handleCategoryChange} />
          </div>
          <div className="col-md-6">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md-12">
            <h1 className="App-title">Simple React News App</h1>
          </div>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/articlelist"/>
                )}/>
                 <Route exact path='/articlelist'   render={(props) => (
                                                      <Articles {...props} category={this.state.category} />
                                                          )} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
