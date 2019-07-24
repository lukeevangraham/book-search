import React from "react";
import "./searchForm.css";

function SearchForm(props) {
  return (
    <form className="form-bg p-3 rounded">
      <div className="form-group">
        <label htmlFor="search">Book Search:</label>
        <input
          className="form-control"
          type="text"
          placeholder="To Kill A Mockingbird"
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;





        // <div className="card">
        //   <div className="card-body">
        //     <h5 className="card-title">Book Search</h5>
        //     <h6 className="card-subtitle mb-2 text-muted">Book</h6>
        //     {/* <p className="card-text">
        //       Some quick example text to build on the card title and make up the
        //       bulk of the card's content.
        //     </p> */}

        //     <form>
        //       <div className="form-group">
        //         <input
        //           className="form-control"
        //           type="text"
        //           placeholder="To Kill A Mockingbird"
        //         />
        //       </div>
        //       <button
        //         onClick={PromiseProvider.handleFormSubmit}
        //         type="submit"
        //         className="btn btn-primary"
        //       >
        //         Submit
        //       </button>
        //     </form>
        //   </div>
        // </div>
