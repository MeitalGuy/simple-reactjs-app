import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from "react-bootstrap/Spinner";
import ArticleDetails from './ArticleDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Articles extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedArticleIndex: 0
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getArticleData();
  }

  //Function to get the Article Data from News API
  getArticleData() {
    fetch('https://newsapi.org/v2/top-headlines?country=il&apiKey=72d6bb51f7a14edf80a54e2f54900661')
    .then(res => res.json())
    .then((data) => {
      this.setState({ articlesList: data.articles })
    })
    .catch(console.log)
  };

  render() {
    if (!this.state.articlesList)
      return (<Spinner animation="grow" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.articlesList.map(article => 
          <Card className="centeralign">
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
              <Card.Text>{article.publishedAt}</Card.Text>
              <Button bsStyle="info" onClick={() => this.setState({selectedArticleIndex: this.state.articlesList.indexOf(article)})}>

                Click to View Details

              </Button>
            </Card.Body>
          </Card>)
        }
      </div>
      <div className="col-md-6">
        <ArticleDetails val={this.state.articlesList[this.state.selectedArticleIndex]}/>
      </div>
    </div>)
  }

}
