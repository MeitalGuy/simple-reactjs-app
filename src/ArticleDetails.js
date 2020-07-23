import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import 'bootstrap/dist/css/bootstrap.min.css';

//This Component is a child Component of Articles Component
export default class ArticleDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getArticleDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Article Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getArticleDetails(this.props.val)
    }
  }

  //Function to Load the articledetails data from json.
  getArticleDetails(details) {
    this.setState({articleDetails: details})
  };

  render() {
    if (!this.state.articleDetails)
      return (<Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>)
    return (<div className="articledetails">
      <Card bg='light'>
        <Card.Img variant="top" src={this.state.articleDetails.urlToImage} />
        <Card.Body>
          <Card.Title>{this.state.articleDetails.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.state.articleDetails.source.name}</Card.Subtitle>
          <Card.Text>{this.state.articleDetails.description}</Card.Text>
          <Button variant="info" href={this.state.articleDetails.url} target="_blank">Read full article</Button>
        </Card.Body>
      </Card>
    </div>)
  }
}
