import React from "react";
import "./style.css";

const styles = {
  style: {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  },

  phantom: {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
  }
}

function Footer() {
  return (
    <div>
      <div style={styles.phantom} />
    <footer style={styles.style}>
      {/* <div className="container"> */}
        <span>Book Search</span>
      {/* </div> */}
    </footer>
    </div>
  );
}

export default Footer;
