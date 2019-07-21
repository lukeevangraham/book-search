import React from "react";
import "./style.css";

const phantom = {
  display: 'block',
  padding: '20px',
  height: '80px',
  width: '100%',
}

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "relative",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

function Footer() {
  return (
    <div>
      <div style={phantom} />
      <footer style={style} className="col-12 footer navbar navbar-expand-lg navbar-light bg-light mt-5">
        <span>Book Search</span>
      </footer>
    </div>
  );
}

export default Footer;
