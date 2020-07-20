import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ArticleDetails from './ArticleDetails'

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
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.articlesList.map(article => <Panel bsStyle="info" key={article.title} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{article.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{article.source.name}</p>
              <p>{article.publishedAt}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedArticleIndex: this.state.articlesList.indexOf(article)})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <ArticleDetails val={this.state.articlesList[this.state.selectedArticleIndex]}/>
      </div>
    </div>)
  }

}
