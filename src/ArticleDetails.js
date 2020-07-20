import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'

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
      return (<p>Loading Data</p>)
    return (<div className="articledetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.articleDetails.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Title : {this.state.articleDetails.title}</p>
          <p>Source : {this.state.articleDetails.source.name}</p>
          <p>Author : {this.state.articleDetails.author}</p>
          <p>Published at : {this.state.articleDetails.publishedAt}</p>
          <p>Description : {this.state.articleDetails.description}</p>
          <p>Url : {this.state.articleDetails.url}</p>
          <p>Image Url : {this.state.articleDetails.urlToImage}</p>
        </Panel.Body>
      </Panel>
    </div>)
  }
}
