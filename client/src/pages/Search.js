import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
// import ResultList from "../components/ResultList";
import API from "../utils/API";
// import { PromiseProvider } from "mongoose";
import openSocket from 'socket.io-client';
import "./search.css";
const socket = openSocket('http://localhost:8000');

class Search extends Component {

  constructor(props) {
    super(props);
    
    this.sendSocketIO = this.sendSocketIO.bind(this);
  }

  state = {
    search: "",
    results: []
    // title: "",
    // authors: "",
    // description: "",
    // image: "",
    // link: ""
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    console.log("mounted!");
    // this.searchGiphy("kittens");
  }

  searchGoogle = query => {
    API.search(query)
      // .then(res => console.log(res.data.items[0].volumeInfo))
      .then(res => {
        console.log(res.data.items);
        this.setState({ results: res.data.items });
      });
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

  handleSaveClicked = id => {
    const selectedBook = this.state.results.filter(result => result.id === id);
    console.log(selectedBook[0]);

    API.saveBook({
      title: selectedBook[0].volumeInfo.title,
      authors: selectedBook[0].volumeInfo.authors.join(", "),
      description: selectedBook[0].volumeInfo.description,
      image: selectedBook[0].volumeInfo.imageLinks.smallThumbnail,
      link: selectedBook[0].volumeInfo.previewLink
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .then(alert("Book Saved!"));
  };

  sendSocketIO() {
    socket.emit('example_message', 'demo');
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
        <div><button onClick={this.sendSocketIO}>Send Socket.io</button></div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        {this.state.results.length ? (
          <div className="mt-4">
            {this.state.results.map(result => {
              if (!result.volumeInfo.imageLinks) {
                console.log(JSON.stringify(result.volumeInfo, null, 4));
              }
              return (
                <li className="list-group-item pb-2" key={result.id}>
                  <div className="row">
                    <div className="col-9">
                      <h2>{result.volumeInfo.title}</h2>
                      <p>
                        Written by{" "}
                        {result.volumeInfo.authors
                          ? result.volumeInfo.authors.join(", ")
                          : "Unknown"}{" "}
                      </p>
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
                        onClick={() => this.handleSaveClicked(result.id)}
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
                        src={
                          result.volumeInfo.imageLinks
                            ? result.volumeInfo.imageLinks.smallThumbnail
                            : ""
                        }
                      />
                    </div>
                    <div className="col-10">
                      <p>{result.volumeInfo.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        ) : (
          <div className="container bg-light mt-4 rounded pt-3 pb-5 mb-5 empty">
            <p className="mb-5 pb-5">No Results to Display</p>
          </div>
        )}
        {/* <ResultList results={this.state.results} /> */}
      </div>
    );
  }
}

export default Search;
