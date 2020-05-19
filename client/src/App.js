import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { subscribeToBookAdd } from "./utils/ioAPI";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const io = require("socket.io-client");
const socket = io("https://167.172.201.59:8000");

const customId = "custom-id-yes";

class App extends Component {
  constructor(props) {
    super(props);

    subscribeToBookAdd((err, message) =>
      this.setState({
        message: message,
      })
    );
  }

  state = {
    message: "no message yet",
  };

  notify = (msg) => {
    return toast("Book Saved: " + msg, {
      toastId: customId,
    });
  };

  handleInputChange = (input) => {
    console.log("INPUT: ", input);

    this.setState({
      message: input,
    });
  };

  render() {
    socket.on("example_message", (title) => {
      this.setState({ message: title });
      this.notify(title);
      // this.handleOpen()
    });
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            {/* <button onClick={this.notify}>Notify !</button> */}
            <ToastContainer />
          </div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={Search} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
