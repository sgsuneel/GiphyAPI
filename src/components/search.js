import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };

    onSubmit = e => {
      e.preventDefault();
    //  console.log(this.state.text)
      this.props.searchGifs(this.state.text);
      this.setState({ text: ''})
    //   if (text === "") {
    //     setAlert("Please enter something", "light");
    //   } else {
    //     searchGiphy(text);
    //   }
    };
  onChange = e => {
    this.setState({
      // text: e.target.value
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.onSubmit} className="form-inline">
          <span className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              name="text"
              id="inputPassword2"
              placeholder="Search term"
              value={this.state.text}
              onChange={this.onChange}
            />
          </span>
          <button type="submit" className="btn btn-dark mb-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
