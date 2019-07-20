import React from "react";

function ResultList(props) {
  return (
    console.log(props.results),
    (
      <ul className="list-group">
        <h4>Results</h4>
        {props.results.map(result => (
          <li className="list-group-item" key={result.id}>
            <div className="row">
              <div className="col-9">
                <h2>{result.volumeInfo.title}</h2>
                <p>Written by {result.volumeInfo.authors} </p>
              </div>
              <div className="col-3 text-right">
              <a class="btn btn-secondary ml-2" target="blank" href={result.volumeInfo.previewLink} role="button">View</a>
              <a class="btn btn-secondary ml-2" target="blank" href={result.volumeInfo.previewLink} role="button">Save</a>
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
        ))}
      </ul>
    )
  );
}

export default ResultList;
