import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DisplayClock from "./components/displayclock";
import DisplayDate from "./components/displaydate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GiphyScreen from "./components/giphyapi_main";

import "./styles/clock.css";

class App extends Component {
  state = {
    text: ""
  };

  

  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <span className="row">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <span className="col">
                      <DisplayClock />
                    </span>

                    <span className="col">
                      <DisplayDate />
                    </span>
                  </Fragment>
                )}
              />
              <Route exact path="/giphy" component={GiphyScreen} />
            </Switch>
          </span>
        </div>
      </Router>
    );
  }
}
export default App;
