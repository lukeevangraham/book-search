import React from "react";

function Search() {
  return (
    <div className="container">
      <h1>Search Page</h1>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Book Search</h5>
          <h6 className="card-subtitle mb-2 text-muted">Book</h6>
          {/* <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}

          <form>
              <div className="form-group">
            <input
              class="form-control"
              type="text"
              placeholder="To Kill A Mockingbird"
            />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
