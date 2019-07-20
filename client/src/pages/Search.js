import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import ResultList from "../components/ResultList";
import API from "../utils/API";
// import { PromiseProvider } from "mongoose";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    // this.searchGiphy("kittens");
  }

  searchGoogle = query => {
    API.search(query)
      // .then(res => console.log(res.data.items[0].volumeInfo))
      .then(res => this.setState({ results: res.data.items }))
      // .catch(err => console.log(err))
     .then(console.log(this.state.results));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogle(this.state.search);
  };

  render(props) {
    return (
      <div className="container">
        <h1>Search Page</h1>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">(React) Google Books Search</h1>
            <p className="lead">Search for and Save Books of Interest</p>
          </div>
        </div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Search;
