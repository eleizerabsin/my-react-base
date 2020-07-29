import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../../redux/actions";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData("https://jsonplaceholder.typicode.com/posts");
  }

  render() {
    return (
      <>
        <h5>{this.props.apiError}</h5>
        <ul>
          {this.props.articles.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.example.remoteArticles.slice(0, 10),
    apiError: state.example.apiError
  };
}

function mapDispatchToProps(dispatch) {
    return {
      getData: (data) => dispatch(getData("test"))
    };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);