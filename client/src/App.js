import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { subscribeToBookAdd } from "./utils/ioAPI";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Footer from "./components/Footer";
import "./App.css";

const io = require("socket.io-client")
const socket = io("http://localhost:8000");


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

  render() {
    socket.on('example_message', function(msg) {
      console.log("LOOK HERE: ", msg)
    })
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              component={Search}
              message={this.state.message}
            />
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
