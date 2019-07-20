import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
// import ResultList from "../components/ResultList";
import API from "../utils/API";
// import { PromiseProvider } from "mongoose";

class Search extends Component {
  state = {
    search: "",
    results: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
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
    //  .then(console.log(this.state.results));
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

  handleSaveClicked = (event) => {
    event.preventDefault();
    const data = event.target.data
    console.log(data);
  }

  render() {
    return (
      <div className="container">

        <div className="jumbotron jumbotron-fluid mt-4 rounded">
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
        {this.state.results.length ? (
          <div>
          {this.state.results.map(result => {
            
            return(
              <li className="list-group-item" key={result.id}>
            <div className="row">
              <div className="col-9">
                <h2>{result.volumeInfo.title}</h2>
                <p>Written by {result.volumeInfo.authors} </p>
              </div>
              <div className="col-3 text-right">
                <a
                  className="btn btn-secondary ml-2"
                  target="blank"
                  href={result.volumeInfo.previewLink}
                  role="button"
                >
                  View
                </a>
                <button
                  className="btn btn-secondary ml-2"
                  data={result.id}
                  onClick={
                    this.handleSaveClicked}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <img
                  alt={result.title}
                  className="img-fluid"
                  src={result.volumeInfo.imageLinks.smallThumbnail}
                />
              </div>
              <div className="col-10">
                <p>{result.volumeInfo.description}</p>
              </div>
            </div>
          </li>
            )
          })}
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
        {/* <ResultList results={this.state.results} /> */}
      </div>
    );
  }
}

export default Search;
