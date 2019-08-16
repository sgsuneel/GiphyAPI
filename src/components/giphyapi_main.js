import React, { Component } from "react";
import axios from "axios";
import SearchBar from './SearchBar';
// import Search from "./search";
import SearchItems from "./searchitems";

class GiphyApiMain extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }
  // Search Giphy
  //   const API_KEY:'iDBnHGoKFvpQl4D8XskXWmZOlLpW7HHS';
  // searchGifs = async text => {
  //   const res = await axios
  //     .get(
  //       `http://api.giphy.com/v1/gifs/search?api_key=iDBnHGoKFvpQl4D8XskXWmZOlLpW7HHS&q=${text}&limit=5`
  //     )
  //     .then(response => {
  //       this.setState({
  //         gifs: response.data.data
  //       });
  //       console.log(text);
  //       console.log(this.state.gifs);
  //     })
  //     .catch(error => {
  //       // this.errors.push(error);
  //       console.log("Error", error);
  //     });
  // };

  xmlhr = query => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=5&api_key=iDBnHGoKFvpQl4D8XskXWmZOlLpW7HHS`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });

        console.log(this.state.gifs);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  searchGif = (event, query) => {
    query = event.target.value;

    if (event.key === 'Enter') {
      event.preventDefault();

      this.xmlhr(query);
    }
  };

  render() {
    return (
      <div>
        <br />
        <SearchBar searchGif={this.searchGif} />
        <SearchItems gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GiphyApiMain;
