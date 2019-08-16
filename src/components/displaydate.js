import React, { Component } from "react";

class DisplayDate extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ isToggle: !this.state.isToggle });
  }

  render() {
    const newDate = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const bPoint = "/";
    return (
      <div>
        <h1 className="text-xs-center">Date </h1>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Toggle
        </button>

        <div
          style={{ display: this.state.isToggle ? "block" : "none" }}
          className="container"
        >
          <strong>
            {date}
            {bPoint}
            {month}
            {bPoint}
            {year}
          </strong>
        </div>
      </div>
    );
  }
}

export default DisplayDate;
