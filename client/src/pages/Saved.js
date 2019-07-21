import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {
  state = {
    search: "",
    results: []
    // title: "",
    // authors: "",
    // description: "",
    // image: "",
    // link: ""
  };

  componentDidMount() {
this.loadBooks();
  }

  loadBooks = () => {
    console.log("loading books")
    API.getBooks()
    // .then(res => console.log(res.data))
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err))
      .then(console.log(this.state.results))
  };

  deleteBook = id => {
    API.deleteBook(id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
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

        {this.state.results.length ? (
          <div className="mb-5">
            {this.state.results.map(result => {
              return (
                <li className="list-group-item" key={result._id}>
                  <div className="row">
                    <div className="col-9">
                      <h2>{result.title}</h2>
                      <p>Written by {result.authors} </p>
                    </div>
                    <div className="col-3 text-right">
                      <a
                        className="btn btn-secondary ml-2"
                        target="blank"
                        href={result.link}
                        role="button"
                      >
                        View
                      </a>
                      <button
                        className="btn btn-secondary ml-2"
                        data={result._id}
                        onClick={() => this.deleteBook(result._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <img
                        alt={result.title}
                        className="img-fluid"
                        src={result.image}
                      />
                    </div>
                    <div className="col-10">
                      <p>{result.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        ) : (
          <div className="container bg-light mt-4 rounded pt-3 pb-5 mb-5">
          <p>No Results to Display</p>
          </div>
        )}
        {/* <ResultList results={this.state.results} /> */}
      </div>
    );
  }
}

export default Saved;
