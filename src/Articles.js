import React, {Component} from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ArticleDetails from './ArticleDetails';
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

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category || prevProps.country !== this.props.country) {
      this.getArticleData();
    }
  }

  //Function to get the Article Data from News API
  getArticleData() {
    fetch('https://newsapi.org/v2/top-headlines?country='+this.props.country+'&category='+this.props.category+'&apiKey=72d6bb51f7a14edf80a54e2f54900661')
    .then(res => res.json())
    .then((data) => {
      this.setState({ articlesList: data.articles });
      this.setState({ errorMessage: null});
    })
    .catch((error) => {
            console.log(error);
            this.setState({ errorMessage: error});
          })
  };

  render() {
    if(this.state.errorMessage)
      return(<div className="col-md-12">
                <Alert variant="danger" transition="false">An error occured while fetching data from News API.</Alert>
            </div>);
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
